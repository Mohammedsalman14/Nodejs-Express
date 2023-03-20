const Evenemitter = require('./event');

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
emitter.once('bar2', () => {
    console.log("The Bar2.");
})





emitter.emit('response', 123);
emitter.emit('bar');
emitter.emit('bar2');
    




/* The EventEmitter is a module 
that facilitates communication/interaction between objects in Node. */
