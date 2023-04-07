const express = require('express');
const path=require('path');
const { products } = require('../data/Data.js');

const app = express();

app.use(express.static('./public'));

app.listen(5000);

app.get('/', (req, res) => {
   res.status(200).sendFile(path.join(__dirname,'./index.html'));
})
