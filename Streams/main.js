const {createReadStream}=require('fs');

const stream=createReadStream('../content/big-file.txt',{highWaterMark:64000,encoding:'utf-8'});

stream.on('data',(result)=>{
    console.log(result);
})

stream.emit('data',"testing...")


/**
 * Using Writable Streams
 * Implementing Writable Streams
 * Using Readable Streams
 * Implementing Reading Streams
 * Implementing Duplex Streams
 * Using Duplex Streams
 * Implementing Transform Streams
 * Using Transform Streams
 * 
 * 
 */