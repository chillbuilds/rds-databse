const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
    host: process.env.DB_ENDPOINT,
    user: "admin",
    password: process.env.DB_PASSWORD
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});