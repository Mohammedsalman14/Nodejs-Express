const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})



const logger = (req,res,next) => {
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}
app.use(logger);
app.get('/',logger, (req, res) => {

    res.status(200).send("Home");

})
app.get('/about', (req, res) => {
    res.status(200).send("About");
})
