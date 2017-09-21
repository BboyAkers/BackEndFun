var express = require('express');

var app = express();

var port = process.env.PORT || 3000;



app.get('/', function (req, res) {
   res.send('welcome to my API!');
});

app.listen(3000, function () {
    console.log('Running on Port ' + port);
});