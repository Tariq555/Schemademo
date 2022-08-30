const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/schools', (req, res) => {
    let query = "SELECT id FROM schools"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  });

  // // registrera en ny lärare
  // server.post('/data/schools', (request, response) => {
  //   let user = request.body
  //   let encryptedPassword = encrypt(user.password)
  //   let result
  //   try {
  //     result = db.prepare('INSERT INTO schools (email, password) VALUES(?,?)').run([user.email, encryptedPassword])
  //   } catch (e) {
  //     console.error(e)
  //   }
  //   response.json(result)
  // })


  // // komplettera profil för användare
  // server.put('/data/schools', (request, response) => {
  //   let user = request.body
  //   let result
  //   try {
  //     result = db.prepare('UPDATE schools SET name = ?, shortName = ?').run([user.name, user.shortName])
  //   } catch (e) {
  //     console.error(e)
  //   }
  //   response.json(result)
  // })


  // // begär ändring av lösenord för användare
  // server.delete('/data/schools', (request, response) => {
  //   let user = request.body
  //   // let result
  //   // try {
  //   //   result = db.prepare('UPDATE teachers SET password = NULL WHERE email = ? AND hide = 0').run([user.email])
  //   // } catch (e) {
  //   //   console.error(e)
  //   // }
  //   response.json(result)
  // })


  // ändra lösenord för användare
  // server.patch('/data/teachers/password', (request, response) => {
  //   let user = request.body
  //   let encryptedPassword = encrypt(user.password)
  //   let result
  //   try {
  //     result = db.prepare('UPDATE teachers SET password = ? WHERE password IS NULL AND email = ?').run([encryptedPassword, user.email])
  //   } catch (e) {
  //     console.error(e)
  //   }
  //   response.json(result)
  // })


}