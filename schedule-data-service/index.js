const db = require("./modules/db.js")()
const express = require("express")
const server = express()
server.use(express.json())
const port = 7666
const host = `http://localhost:${port}`

// sessions
let cookieParser = require('cookie-parser')
server.use(cookieParser())
let session = require('express-session')
server.use(session({
  secret: 'keyboard cat jksfj<khsdka',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // set to true with https
    httpOnly: true
  }
}))

// bypass 2FA verification (dev only)
server.use(function (req, res, next) { req.bypassVerification = true; next() })

// ACL
const acl = require('./services/acl.js')
server.use(acl)

// response headers
const setResultHeaders = require('./modules/set-result-headers')

// start
server.listen(port, () => {
  console.log(host)
  console.log('server running on port ' + port)
})

const calendar = require('./services/calendar.js')
const generateSchedule = require('./services/generate-schedule')

server.use('/', express.static('../www'))
server.use('/admin', express.static('../admin/dist'))
server.use('/assets', express.static('../admin/dist/assets'))

// REST API routes

require('./routes/teachers.js')(server, db)
require('./routes/login.js')(server, db)
require('./routes/schools.js')(server, db)


const apiDescription = require('./api-description.js')(host)

server.get("/data", async (req, res) => {
  setResultHeaders(res, apiDescription)
  res.json(apiDescription)
})

server.get('/data/calendar/:from/:to', (req, res) => {
  const cal = calendar.makeCalendar(req.params.from, req.params.to, req.params.locale)
  const populated = calendar.populateCalendar(cal)
  setResultHeaders(res, populated)
  res.json(populated)
})

server.get('/data/courses/:from/:to', (req, res) => {
  let query = "SELECT * FROM courses WHERE startDate >= @startDate AND endDate <= @endDate"
  let result = db.prepare(query).all({ startDate: req.params.from, endDate: req.params.to })
  setResultHeaders(res, result)
  res.json(result)
})

server.get('/data/classes_view/:all?', (req, res) => {
  let query
  if (req.params.all) {
    query = "SELECT * FROM classes_view WHERE ORDER BY schoolShortName, shortName"
  } else {
    query = "SELECT * FROM classes_view WHERE hide = 0 ORDER BY schoolShortName, shortName"
  }
  let result = db.prepare(query).all()

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i].schoolShortName === 'Nodehill') { // move Nodehill to the very end of the ordered set
      let row = result.splice(i, 1)
      result.push(row[0])
      break;
    }
  }
  setResultHeaders(res, result)
  res.json(result)
})

const createInvoice = require('./services/create-invoice.js')

server.post('/data/invoices/', (req, res) => {
  if (!req.body.startDate || !req.body.endDate || !req.body.school) {
    res.json({
      error: "Insufficient request data"
    })
  }
  let createdInvoice = createInvoice(req.body, db)
  setResultHeaders(res, createdInvoice)
  res.json(createdInvoice)
})

server.post('/data/generate-schedule', generateSchedule)

// generic one-to-one table API

server.get('/data/:table', (req, res) => { // but limit which tables to query with ACL
  let query = "SELECT * FROM " + req.params.table
  let result = db.prepare(query).all()
  setResultHeaders(res, result)
  res.json(result)
})

server.get('/data/:table/:id', (req, res) => { // but limit which tables to query with ACL
  let query = "SELECT * FROM " + req.params.table + ' WHERE id = @id'
  let result = db.prepare(query).all(req.params)
  setResultHeaders(res, result[0])
  res.json(result[0])
})

server.post('/data/:table', (req, res) => { // limit which tables to query with ACL
  let query = `INSERT INTO ${req.params.table} (${Object.keys(req.body).join(', ')}) VALUES(@${Object.keys(req.body).join(', @')})`
  let result
  try {
    result = db.prepare(query).run(req.body)
  } catch (e) {
    console.error(e)
  }
  res.json(result)
})

server.put('/data/:table/:id', (req, res) => { // limit which tables to query with ACL
  req.body.id = req.params.id // move/replace the id into the body so it can be passed with the other replacements
  let query = `UPDATE ${req.params.table} SET`
  for (let key of Object.keys(req.body)) {
    query += ` ${key}=@${key},`
  }
  query = query.replace(/\,$/, '')
  query += ` WHERE id = @id`
  let result
  try {
    result = db.prepare(query).run(req.body)
  } catch (e) {
    console.error(e)
  }
  res.json(result)
})

server.delete('/data/:table/:id', (req, res) => {
  let query = "DELETE FROM " + req.params.table + " WHERE id = @id"
  let result
  try {
    result = db.prepare(query).run({ id: req.params.id })
  } catch (e) {
    console.error(e)
  }
  res.json(result)
})