var conn = require("../config/db-connection");
var connection = conn.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {

    var pid = req.body.p_id;
    var pname = req.body.p_name;
    var pcost = req.body.p_cost;

    connection.query("insert into products values(" + pid + ",'" + pname + "'," + pcost + ")",
        function (err, result) {
            if (err) {
                res.send({ "status": "fail" });
            } else {
                res.send({ "status": "success" });
            }
        });

    
});
module.exports=router;