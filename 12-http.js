const http =require('http'); 

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(`<h1>Welcome to Home page</h1>`);
        
    }
    if(req.url==='/about'){
        return res.end(`<h2>Here is our short history</h2>`)
    }
    return res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for </p>
        <a href="/">back home</a>`
    )
})
server.listen(5050);