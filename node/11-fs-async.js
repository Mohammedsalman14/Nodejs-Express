const {readFile,writeFile}= require('fs');

readFile('./content/myfile.txt','utf-8',(err1,data1)=>{
    if(err1)throw err1;
    const firstfile=data1;
    readFile('./content/second.txt','utf-8',(err2,data2)=>{
        if(err2)throw err2;
        const secondfile=data2;
        writeFile('./content/result-async.txt',`Here is the result: ${firstfile},${secondfile}`,(err3,data3)=>{
            if(err3) throw err3;
            console.log(data3);

        })
    })
})