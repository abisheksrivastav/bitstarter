var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var FILE_DEFAULT = "index2.html";
var message = function(file){
file = file || FILE_DEFAULT;
var buffer = new Buffer(fs.readFileSync(file));
return (buffer.tostring('utf-8'));
};
app.get('/', function(request, response) {
  response.send(message());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
