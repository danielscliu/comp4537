
var http = require('http');
const dt = require('./modules/logic');
let url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true);
  let serverTime = dt.getServerTime();

  res.write(`<h1 style= "color: blue">Hello ${q.query["name"]}, 
  the current Server Time is :${serverTime} </h1>`);
  res.end();
}).listen(8080);