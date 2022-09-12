const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/classes', (req, res) => {
    let query = "SELECT id FROM classes"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  });

  server.post('/data/classes', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('INSERT INTO classes (name, shortName, school, blog, hide, defaultStartTime, defaultEndTime, defaultInvoiceItem, defaultHoursPerDay) VALUES(?,?,?,?,?,?,?,?,?)').run([user.name, user.shortName, user.school, user.blog, user.hide, user.defaultStartTime, user.defaultEndTime, user.defaultInvoiceItem, user.defaultHoursPerDay])
    } catch (e) {
      console.error(e)
    }
    response.json(result)
  })
}