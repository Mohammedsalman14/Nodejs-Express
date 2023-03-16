const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("got the user");
        if(false){
        resolve({user:'ed'});
        }else{

        
        reject(new Error('User not logged in'));
        }
    }, 3000);
})

promise.then(result=>{
    console.log(result);
})
.catch(err=>{console.log(err.message);})