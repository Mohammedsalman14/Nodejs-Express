const express = require('express');
const app = express();
const { products } = require("../data/Data.js")
const { people } = require("../data/Data.js")
const port = 4000;
app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
})

app.get('/', (req, res) => {
    // res.json([{FirstName:"Mohammed"},{LastName:"Salman"}])
    res.send('<h1>Home page</h1><a href="/api/products">products</a><br><br><a href="/api/people">people</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts)
})
app.get('/api/people', (req, res) => {
    res.status(200).json(people);
})
app.get('/api/products/:productid', (req, res) => {
    // console.log(req);
    const { productid } = req.params;
    const singleproduct = products.find((product) => {
        return product.id == Number(productid);
    })
    if (!singleproduct) {
        return res.sendStatus(404, "Does't not exist...")
    }
    res.status(200).json(singleproduct)
})
// app.get('/api/v1/query',(req,res)=>{
//     let searchproducts=[...products];
//     const{search,limit}=req.query;
//     if(search){
//         searchproducts= searchproducts.filter((product)=>{
//             return product.name.startsWith(search);
//         })
//     }
//     if(limit){
//         searchproducts=searchproducts.slice(0,Number(limit));
//     }
//     if(searchproducts.length<1){
//         res.status(200).json({success:"true",data:[]})
//     }
//     res.status(200).json(searchproducts);
// })
app.get('/api/v1/query', (req, res) => {
    let searchproducts = [...products];
    const { search, limit } = req.query;
    if (search) {
        searchproducts = searchproducts.filter((product) => {
            return product.name.startsWith(search);
        })

    }
    if (limit) {
        searchproducts = searchproducts.slice(0, Number(limit));
        return searchproducts;
    }
    if(searchproducts<1){
        return res.status(200).json({success:"true",data:[]})
    }
    res.status(200).json(searchproducts);
})