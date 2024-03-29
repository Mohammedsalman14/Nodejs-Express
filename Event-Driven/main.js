// const eventEmiter=require('events');
// const customEmiter=new eventEmiter();
// customEmiter.on('testing',test)

// customEmiter.emit('testing',"Salman",14);

// function test(name,id){
//     console.log(`hello world ${name} ${id}`);
// }




// const http=require('http');

// const server=http.createServer();

// server.on('request',(req,res)=>{

//    res.end("hello world");

// }).listen(8060);


const Evenemitter = require('events');

const emitter = new Evenemitter();


emitter.on('response', () => {
    console.log("Event Ocurred");
});
emitter.on('response', () => {
    console.log("Event Ocurred");
});
emitter.on('response', (x) => {
    console.log(`Event Ocurred with paramater ${x}`);
});
emitter.on('bar', () => {
    console.log("The Bar.");
})




emitter.emit('response', 123);
emitter.emit('bar');


/* The EventEmitter is a module 
that facilitates communication/interaction between objects in Node. */
