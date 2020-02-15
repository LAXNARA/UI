var mysql = require("mysql");
var db_conn = require("./db_properties");

module.exports = {
    "getConnection": function () {
        return mysql.createConnection({
            host: db_conn.host,
            user: db_conn.user,
            password: db_conn.password,
            database: db_conn.database,
            port: 3306
        })
    }
};