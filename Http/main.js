const http = require('http');
const {readFileSync}=require('fs');
const homePage=readFileSync('./index.html');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    // res.write("<h1>hello world</h1>");
    console.log(req.rawHeaders);
    if (req.url == "/about") {
        res.writeHead(200, { 'content-type': 'text/html' });

        res.write(homePage);

    } else if (req.url == "/error") {
        res.writeHead(404, { 'content-type': 'text/html' });

        res.write("<h1>Error</h1>");

    }
    res.end();


});

server.listen(5001);

