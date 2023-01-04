const http = require('http');
const { url } = require('inspector');

http.createServer((req, res) => {


    if(req.url=='/'){

        res.end('this is home page');
    }

    else if(req.url== '/contact'){

        res.end('this is contact Page');
    }

    else{
        res.writeHead(404);
        res.end(' 404 this url does not exit');
    }
    // res.end('<h1> this server is working <h1>');

}).listen(8000, '127.0.0.1',
    () => {
        console.log("server is connected ");
    });

