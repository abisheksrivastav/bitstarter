var fs = require('fs');
var FILE_DEFAULT = "index1.html";
file = file || FILE_DEFAULT;
var buffer = new Buffer(fs.readFileSync(file));
sometext = 'TEXT';
app.get('/', function(request, response) {
  response.send(sometext, + '');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
