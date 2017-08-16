//import fs from 'fs';
// (ou)

let fs = require('fs');
let hello = require('main.js');
fs.readFile('/home/', function(error, data) { console.log(data); });
console.log(fs);