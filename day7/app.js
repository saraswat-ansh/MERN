const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();//CREATE A SERVER,EQUIVALENT TO http.CreateServer()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    console.log("YOU ARE DONE");
    res.send("<h1>WELCOME TO EXPRESS</h1>")//SEND THE RESPONSE TO THE BROWSER
});

app.get('/about', (req, res) => {
    console.log("YOU ARE DONE");
    res.send("<h1>WELCOME TO ABOUT</h1>")
});

// app.get('/about',(req,res)=>{
//     const data=require("./data.json");
//     res.json(data);
// });

app.get('/data', (req, res) => {
    const data = require("./data.json");
    const { id, username, password } = data;
    res.send(`
        <h2>USER DETAILS</h2>
        <p>ID==${id}</p>
        <p>NAME==${username}</p>
        <p>PASSWORD==${password}</p>`);
});

app.get('/form', (req, res) => {
    res.send(`
        <h1>USER FORM</h1>
        <form method="POST" action="/form"> 
       <label>NAME::</label>
       <input type="text" name="name" required>
       <input type="submit" value="Submit">
       </form>
       `);
});
//req.body--->extract contant from the data
app.post('/form', (req, res) => {
    const {name}=req.body;
    console.log(`Received data: ${JSON.stringify(req.body)}`);
    res.send(`
       <h2>USER DETAILS</h2>
        <p>NAME:::${name}</p>
        <a href="/form">--BACK--</a> `);
});

//ROUTE
app.post('/contact', (req, res) => {
    res.send(`Received data: ${JSON.stringify(req.body)}`);
    console.log(`Received data: ${JSON.stringify(req.body)}`);
});

app.get('/open', (req, res) => {
    console.log("OPEN A SITE");
    res.redirect("https://www.youtube.com/")
});

app.listen(65344, () => {
    console.log("SERVER IS RUNNING ON  http://localhost:65344");
});

// const port=60000
// app.listen(port,()=>{
//     console.log(`SERVER IS RUNNING ON THE PORT on http://localhost:${port}`);
// });