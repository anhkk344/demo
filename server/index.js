const express = require("express");
const Database = require("./database.js");

const bodyParser = require('body-parser');
//create application
const urlencodedParser = bodyParser.urlencoded({extended: false})
const port = process.env.PORT || 9090;
const app = express();



app.get("/post", function(req, res){
    Database.getAllUser(function(resultQuery){
        res.json(resultQuery)
    });
});

app.post("/insert", function(req, res){
    var id = req.query.id;
    var title = req.query.title;
    var content = req.query.content;
    var attchement =req.query.attchement;
    Database.insertData(id, title, content, attchement,
         function(resultQuery){
        res.json(resultQuery);
    });
});

app.post("/update", function(req, res){
    var id = req.query.id;
    var title = req.query.title;
    var content = req.query.content;
    var attchement =req.query.attchement;
    Database.updateData(id, title, content, attchement,
         function(resultQuery){
        res.json(resultQuery);
    });
});

app.post("/delete", function(req, res){
    var id = req.query.id;
    Database.deleteByID(id,
         function(resultQuery){
        res.json(resultQuery);
    });
});


app.listen(port, () =>{
    console.log('server is running on port ' + port);
});