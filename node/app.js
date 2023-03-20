const{readFile,writeFile} =require('fs').promises;


// const util=require('util');
// const readFilepromise=util.promisify(readFile);
// const writeFilepromise=util.promisify(writeFile);


const start=async()=>{
    try{
        const first=await readFile('./content/myfile.txt','utf-8');
        const second=await readFile('./content/second.txt','utf-8');
        await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME: ${first} ${second}`,{flag:'a'});
        console.log(first," ",second);
    }
    catch(err){
        console.log(err);
    }
}
start();




// const gettext=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// gettext('./content/myfile.txt').then(result=>console.log(result)).catch(error=>console.log(error))