const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

    const info = fs.readFileSync('D:/NODE.JS/Api/user.json', "utf-8")
    const userData = JSON.parse(info);

    if (request.url == '/') {
        response.end("welcome")
    }
    else if (request.url == '/contact') {
        response.end("Contact")
    }
    else if (request.url == '/about') {
        response.end("about")
    }
    else if (request.url == '/user') {
        response.writeHead(200, { "content-type": "application/json" });
        response.end(userData[0].number);
    }
    else if (request.url == '/Ariticles') {
        response.end("Ariticles")
    }
    else {
        response.writeHead(404, "this Page does not exist");
        response.end()
    }
}).listen(4000, '127.0.0.1', () => {
    console.log('server creation Succesful');
});
