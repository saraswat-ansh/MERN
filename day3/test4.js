const htp = require('http');
const server = htp.createServer((req, res) => {
 // Set header type
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 // Write a response
 res.end('Hello from Node.js HTTP Server!');
});
server.listen(3000, () => {
 console.log('Server is running at http://localhost:3000');
});