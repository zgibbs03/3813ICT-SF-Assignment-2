var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use(express.static(path.join(__dirname + '/www')));

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: "+ host + " port: " + port);
});


const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function (err, client) {
    if (err) {return console.log(err)};
    const dbName = 'login';
    const db = client.db(dbName);
    console.log("Database created!");
    client.close();
})