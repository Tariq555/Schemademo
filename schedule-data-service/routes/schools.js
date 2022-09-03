const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/schools', (req, res) => {
    let query = "SELECT id FROM schools"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  });

  // registrera en ny skola
   server.post('/data/schools', (request, response) => {
     let user = request.body
     let encryptedPassword = encrypt(user.password)
     let result
     try {
      result = db.prepare('INSERT INTO schools (email, password) VALUES(?,?)').run([user.email, encryptedPassword])
     } catch (e) {
       console.error(e)
     }
     response.json(result)
   })


  // uppdatera en skola
  server.put('/data/schools', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('UPDATE schools SET name = ?, shortName = ?').run([user.name, user.shortName])
    } catch (e) {
      console.error(e)
    }
    response.json(result)
  })


}