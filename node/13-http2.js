const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end("Home Page");
    }if(req.url==='/about'){
        for(let i=0;i<100;i++){
            for(let j=0;j<100;j++){
                console.log(`${i} ${j}`);
            }
        }
        return res.end("About page");
    }
})

server.listen(5000,()=>{
    console.log("Server is running...");
})