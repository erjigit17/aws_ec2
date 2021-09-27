const http2 = require('http2');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
    allowHTTP1: true
}

const server = http2.createSecureServer(options, (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('ok');
});

server.listen(8000);