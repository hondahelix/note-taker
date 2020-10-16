var noteData = require("../db/db");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
      });
    app.post("/api/notes", function(req, res) {
        console.log(req.body.title);
        if(req.body.title !=="" && req.body.text !==""){
            noteData.push(req.body);
            res.json(true);
        }
    });
};