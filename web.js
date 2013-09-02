var express = require('express');
var fs = require('fs');
var htmlfile = "abi2.html" ;
var htmlfile2 = "about.html";
var htmlfile3 = "abi2.html";

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

app.get('/about', function(request, response) {
  var data2 = fs.readFileSync(htmlfile2).toString();
  response.send(data2);
});
app.get('/home', function(request, response) {
  var data3 = fs.readFileSync(htmlfile3).toString();
  response.send(data3);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
