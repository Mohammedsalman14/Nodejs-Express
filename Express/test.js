const express=require('express');

const app=express();

app.get('/home/:id',(req,res)=>{
    console.log(req.params);
    const id=req.params;
    if(id==1){
        return res.json("mohammed");
    }
    return res.json("salman");
}).listen(5000);