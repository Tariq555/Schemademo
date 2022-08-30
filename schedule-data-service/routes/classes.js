const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/classes', (req, res) => {
    let query = "SELECT id FROM classes"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  });
}