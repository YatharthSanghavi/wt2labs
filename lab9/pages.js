const { log } = require('console');
const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    // res.sendFile('home.html', {root: __dirname });
    res.sendFile('home.txt', {root: __dirname });
})

app.get('/about',(req,res)=>{
    res.sendFile('about.html', {root: __dirname }); 
})

app.get('/contact',(req,res)=>{
    res.sendFile('contact.html', {root: __dirname });
})

app.get('/privacy',(req,res)=>{
    res.sendFile('privacy.html', {root: __dirname });
})

app.listen(3000,(res,req)=>{
    log("app running on 3000")
})