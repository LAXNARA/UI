var express = require("express");
var fs = require("fs");

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/static",function(req,res){
    fs.readFile("C:/Users/LAXMI/Desktop/AngularMaster/SPA/nodeService/static/static.json",
            function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    });
});

app.listen(8080);
console.log("Server Listening the port no.8080");