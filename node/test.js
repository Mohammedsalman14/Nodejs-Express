console.log('Start');



// const user=loginuser("salman@gmail.com",321321,email=>{
//     console.log(email);
//     uservideos(email.useremail,videos=>{
//         console.log(videos);
//         videoDetails(videos[0],title=>{
//              console.log(title);
//         })
    
//     });
   
// });
function loginuser(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Now We have the data");
            resolve({useremail:email});    
            
        }, 5000);
    })
    
}

function uservideos(email){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(['video1','video2','video3']);
    },5000);
    })
}

function videoDetails(video){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('title of the video')
    }, 5000);
   })
}


async function displayUser(){
    try{
        const loggedUser=await loginuser('salman@gmail.com',212232);
        const uservideo=await uservideos(loggedUser.useremail);
        const details=await videoDetails(uservideo[0]);
        console.log(details);
    }
    catch(err){
        console.log(err);
    }
}

displayUser();




//step 1 

// loginuser('salman@gmail.com','bubmba')
// .then(user=>uservideos(user.useremail))
// .then(videos=>videoDetails(videos[0]))
// .then(detail=>console.log(detail))

console.log("Finish");

// step 2

// const yt=new Promise(resolve=>{
//     setTimeout(() => {
//         console.log("getting stuff form youtube");
//         resolve({videos:[1,2,3,4,5,6,7,8]})
//     }, 2000);
// });

// const fb=new Promise(resolve=>{
//     setTimeout(() => {
//         console.log("stuff from fb");
//         resolve({user:'name'});
//     }, 2000);
// })

// Promise.all([yt,fb])
// .then(result=>{
//     console.log(result);
// })