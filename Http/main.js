const http = require('http');
const { readFileSync } = require('fs');
const homePage = readFileSync('./index.html');
const homePageCss = readFileSync('./style.css');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    // res.write("<h1>hello world</h1>");

    console.log(req.url);
    // About
    if (req.url === "/about") {
        res.writeHead(200, { 'content-type': 'text/html' });

        res.write(homePage);

    }
    // Style.css
    else if (req.url === "/style.css") {
        res.writeHead(200, { 'content-type': 'text/css' });

        res.write(homePageCss);

    }
    // Error 
    else if (req.url === "/error") {
        res.writeHead(404, { 'content-type': 'text/html' });

        res.write("<h1>Error</h1>");

    }


    res.end();


});

server.listen(5100);

