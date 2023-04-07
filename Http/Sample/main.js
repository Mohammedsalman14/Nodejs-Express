const http=require('http');
http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Home page</h2>')
        res.end();
    }
    else if(url=='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page<h2>');
        res.end();
    }
    else{
        const url=req.url;
        res.writeHead(404,{'content-type':'text/html'});
        res.write(`<h1>Error page :(<h1> ${url} Not found`)
        res.end();
    }
}).listen(5000);