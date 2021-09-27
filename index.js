const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('ok');
});

server.listen(5000);

//https://ec2-3-127-22-131.eu-central-1.compute.amazonaws.com/