const express = require('express');
const { products } = require("../data/Data.js")
const app = express();

const port=3000;
app.listen(port, () => {
    console.log(`Server is Running ${port}`);
});
app.get('/', (req, res) => {
    res.send("<h1>Home page</h1><a href='api/products'>products</a>")
});
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    return res.json(newProducts);
});

app.get('/api/products/:productid', (req, res) => {
    const { productid } = req.params;
    const singleproducts = products.find((product) => product.id == Number(productid));
    if (!singleproducts) {
        return res.status(404).res("Product Doed Not Exist");
    }
    res.json(singleproducts);
})
app.get('/api/:product', (req, res) => {
    const { productid } = req.params;
    const singleproducts = products.find((product) => product.id == Number(productid));
    if (!singleproducts) {
        return res.status(404).send("Product Doed Not Exist");
    }
    res.json(singleproducts);
})
