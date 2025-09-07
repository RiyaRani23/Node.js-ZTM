const http = require('http');

const PORT = 3000;

const server = http.createServer((req , res) => {
    res.writeHead(200, {
        // 'Content-Type' : 'text/plain',
          'Content-Type' : 'application/json',
    });
    res.end(JSON.stringify ({
        id : 1 ,
        name : 'Sir Issac Newton',
    }));
});

server.listen(PORT , () => {
    console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 =? localhost