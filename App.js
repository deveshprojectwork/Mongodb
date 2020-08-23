var http = require('http');


// Running this will show the server is running with Hello World
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3003);