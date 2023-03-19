

const Evenemitter=require('events');

const emitter=new Evenemitter();


    emitter.on('response',()=>{
        console.log("Event Ocurred");
    });
    emitter.on('response',()=>{
        console.log("Event Ocurred");
    });
    emitter.on('response',(x)=>{
        console.log(`Event Ocurred with paramater ${x}`);
    });
    emitter.on('bar',()=>{
        console.log("The Bar.");
    })
  
    
    
    
    emitter.emit('response',123);
    emitter.emit('bar');
    

