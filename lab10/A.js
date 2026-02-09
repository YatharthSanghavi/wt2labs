const express = require('express')
const fs = require('fs/promises')
const cookieParser = require('cookie-parser')
const server = express()

server.use((req, res, next) => {
    const time = Date().toLocaleString()
  fs.appendFile('a.txt',`\n${time}`,'utf8')
  next()
})

server.use((req,res,next)=>{
    console.log("helllllllo")
    next()
})

server.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

server.get("/",(req,res)=>{
    try {
        res.end("hi")    
    } catch (error) {
        console.log(error)
    }
})

server.use(cookieParser())

server.listen('8080',(res,req)=>{
    console.log("running")
})

