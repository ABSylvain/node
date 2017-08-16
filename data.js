//import fs from 'fs';
// (ou)
/*let fs = require('fs');
let hello = require('main.js');
fs.readFile('/home/', function(error, data) { console.log(data); });
console.log(fs);*/

function connection(callback) {
    let mysql = require('mysql');
    let con = mysql.createConnection({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'chat',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query('SELECT * FROM message', function(err, result) {
            if (err) throw err;
            callback(result);
        });
    });
}
module.exports = { request: connection };