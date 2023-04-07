const express=require('express');
const {products}=require('../data/Data.js');

const app=express();
app.get('/api/products/:productid',(req,res)=>{
    const { productid } = req.params;
    const singleproducts = products.find((product) => product.id == Number(productid));
    if (!singleproducts) {
        return res.status(404).send("Product Doed Not Exist");
    }
    res.json(singleproducts);
    

}).listen(5000);