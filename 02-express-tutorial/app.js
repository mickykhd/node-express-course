const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("<h1>Hello Express</h1>");
});

server.listen(5000);
