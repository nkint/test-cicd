var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Just to test our server is working
app.get('/api', function(req, res) {
  res.send({
    version: '1.0.0'
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ', port);
});

module.exports = app;
