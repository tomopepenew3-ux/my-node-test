const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Hello! Server is working!');
});

server.listen(3002, '0.0.0.0', () => {
    console.log('Server is running on port 3002');
});

