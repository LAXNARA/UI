var express=require("express");
var app=express();


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", 
           "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  });

var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":false}));
var insert=require("../server/insert/insert");
app.use("/insert",insert);

app.listen(8080);
console.log("port no = 8080");