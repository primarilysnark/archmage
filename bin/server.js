var compression = require('compression');
var express = require('express');
var path = require('path');

var PORT = process.env.port || 8080;
var app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Production express server running at localhost:' + PORT);
});
