

const { readFileSync } = require("fs");



const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

// define --> pages

const home = fs.readFileSync("home.html");

const contact = fs.readFileSync("contact.html");

const service = fs.readFileSync("service.html");

// const mainfile = fs.readFileSync("survey.html");

const server = http.createServer((req, res) => {
  url = req.url;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (url == "/") {
    res.end(home);
  } else if (url == "/contact") {
    res.end(contact);
  } else if (url == "/services") {
    res.end(service);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
    console.log("server not found 404");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
