const { response } = require('express');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    response.send('My First API!');
});

app.listen(3000, function() {
    console.log("First API running on port 3000!");
});