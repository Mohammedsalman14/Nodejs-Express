const express = require('express');
const path=require('path');
const app = express();
const port = 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
    
})

app.use(express.static('./public'));

// get
app.get('/', (req, res) => {
res.sendFile(path.resolve(__dirname,'./index.html'));
})
app.all('*', (req, res) => {
 
})
