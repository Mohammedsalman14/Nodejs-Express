const express = require("express")
const bodyParser = require('body-parser')
const app = express();
const port = 4000;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.send("Home");
})


app.get('/login', (req, res) => {
    res.send(` <form method="POST" action="/login">
    <label>Username:</label>
    <input type="email" name="username">
    <br>
    <label>Password:</label>
    <input type="password" name="password">
    <br>
    <input type="submit" value="Login">
  </form>`)
 
})
app.post('/login',(req,res)=>{
    const UserArray=['salman@gmail.com','mohammedsalman@gmail.com','mdsalman@gmail.com'];
    const PasswordArray=[123,321,213];

    const {username,password}=req.body;
    
    const validuser=UserArray.find((user)=>{
        if(user==String(username)){
           return username;
        }
    })
    const validpassword=PasswordArray.find((pass)=>{
        if(pass==Number(password)){
            return password
        }
    })
    if(validpassword&&validuser){
        res.send(`Logged in as ${username}`);
    }else{
        res.send(`Check username and password`);
    }
    // console.log(req.body);
})
