const { log } = require('console');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.end("hello world");
})

app.listen(3000,(res,req)=>{
    log("app running on 3000")
})