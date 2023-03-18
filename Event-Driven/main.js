const eventEmiter=require('events');
const customEmiter=new eventEmiter();
customEmiter.on('testing',test)

customEmiter.emit('testing',"Salman",14);

function test(name,id){
    console.log(`hello world ${name} ${id}`);
}
// const http=require('http');

// const server=http.createServer();

// server.on('request',(req,res)=>{

//    res.end("hello world");
    
// }).listen(8060);