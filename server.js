//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello Gorlif Sense fan!\n');
//}).listen(process.env.PORT, process.env.IP);
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5050))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
