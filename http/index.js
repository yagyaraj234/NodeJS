const http = require('http');

http.createServer((req, res) => {

    res.end('<h1> this server is working <h1>');

}).listen(5500, '127.0.0.1',
    () => {
        console.log("server is connected ");
    });

