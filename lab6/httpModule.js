const http = require('http');

const Server=http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

Server.listen(8080,()=>{
    console.log("http://localhost:3000/")
})