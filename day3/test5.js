const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/')
  {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome Home</h1>');
  } 
  else if (req.url == '/about') 
  {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1>');
  } 
  else 
  {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
