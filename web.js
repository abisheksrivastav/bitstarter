var express = require('express');
var fs = require('fs');
var htmlfile = "abi2.html" ;
var htmlfile2 = "about.html" ;

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});
app.get('/about', function(request, response) {
    var html2 = fs.readFileSync(htmlfile2).toString();
    response.send(html2);
});

app.get('/home', function(request, response) {
    var html3 = fs.readFileSync(htmlfile).toString();
    response.send(html3);
});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
