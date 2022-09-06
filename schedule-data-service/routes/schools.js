const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/schools/:id', (req, res) => {
    let query = "SELECT * FROM schools WHERE id = ?"
    let result = db.prepare(query).all([req.params.id])
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  });

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

  // ta bort en skola
  server.delete('/data/:table/:id', (req, res)=>{ 
    let query = "DELETE FROM " + req.params.table + " WHERE id = @id"
    let result
    try{
      result = db.prepare(query).run({id:req.params.id})
    } catch(e){
      console.error(e)
    }
      res.json(result)
    })


}