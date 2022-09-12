const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  // registrera en ny skola
   server.post('/data/schools', (request, response) => {
    console.log(request)
     let user = request.body
     let result
     try {
      result = db.prepare('INSERT INTO schools (name, shortName) VALUES(?,?)').run([user.name, user.shortName])
     } catch (e) {
       console.error(e)
     }
     response.json(result)
   })

}