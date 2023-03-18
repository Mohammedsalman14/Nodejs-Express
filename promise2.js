const {readFile}=require('fs');

function getTxtt(path){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try{
                readFile(path,'utf-8',(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                })
            }
            catch(err){
                console.log(err);
            }
        }, 3000);
    })
}
const start=async ()=>{
    try{
        const first= await getTxtt('./content/myfile.txt');
        const second=await getTxtt('./content/second.txt');
        console.log(first,second);
    }
    catch(err){
        console.log(err);
    }
}

start();


// getTxtt().then(result=>{
//     console.log(result);
// }).catch(err=>console.log(err));

