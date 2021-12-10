
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});
const connect = function (){
    connection.connect(function(error){
        if(!error){
            console.log("Database is connected");
        }else{
            console.log("Database connect error");
        }
    });
}
const closeDB = function(){
    connection.end(function(error){
        if(!error) console.log("closed db");
    });
}

exports.getAllUser = function(callbackQuery){
    connect();
    connection.query("select * from demo", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }else{
            console.log(error);
        }
    })
}
exports.insertData =function(id, title, content, attchement, callbackInsert){
    connect();
    connection.query("INSERT INTO demo (id, title, content, attchement)"+
     "VALUES ('"+id+"', '"+title+"' ,'"+content+"' ,'"+attchement+"' );", 
     function(error, results, fields){
        if(!error){
            callbackInsert(results);
        }else{
            console.log(error);
        }
    });
}
exports.updateData=function(id, title, content, attchement, callbackUpdate){
    connect();
    connection.query("UPDATE demo SET title = '"+title+"', content = '"+content+"', attchement = '"+attchement+"' WHERE demo.id = '"+id+"';  ", 
     function(error, results, fields){
        if(!error){
            callbackUpdate(results);
        }else{
            console.log(error);
        }
    });
}
 
                                         

exports.deleteByID=function(id, callbackDelete){
    connect();
    connection.query("DELETE FROM demo WHERE demo.id = '"+id+"' ", 
     function(error, results, fields){
        if(!error){
            callbackDelete(results);
        }else{
            console.log(error);
        }
    });
}
