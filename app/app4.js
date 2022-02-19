const { readFileSync } = require('fs');
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const mainfile = fs.readFileSync("survey.html");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(mainfile);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});