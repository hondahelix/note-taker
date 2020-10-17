const { request } = require("http");
var noteData = require("../db/db");

module.exports = function(app) {
    app.get("/api/note", function(req, res) {
        res.json(noteData);
      });
    app.get("/api/notes/:id", function(req, res) {
        var chosen = req.params.id;
        //console.log(chosen);
        for (var i = 0; i < noteData.length; i++) {
            //console.log(noteData[i].id);
          if (chosen === noteData[i].id) {
            return res.json(noteData[i]);
          }
        }
        return res.json(false);
    });
    app.delete("/api/notes/:id", function(req, res) {
        console.log(req.params.id);
        for(var i = 0; i < noteData.length; i++) {
            if(noteData[i].id == req.params.id) {
                noteData.splice(i, 1);
                return res.json(true);
            }
        }
        return res.json(false);
    });
    app.post("/api/notes", function(req, res) {
        console.log(req.body.id);
        console.log(noteData);
        console.log("hit");
        const found = noteData.some(note => parseInt(note.id) == req.body.id);
        if (!found){
            noteData.push(req.body);
        }
    });
};