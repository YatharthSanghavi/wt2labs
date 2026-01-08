const express = require('express')
const mongoose = require('mongoose')

const server = express()

async function connectDb(){
  const mongourl = "mongodb://localhost:27017/yatharth"
  try {
    const connect = await mongoose.connect(mongourl);
    console.log("connect: "+connect.connection.host);
  } catch (error) {
    console.log(error);
  }
}

connectDb();

server.get('/',async (req,res)=>{
  const db=mongoose.connection.db
  const users = await db.collection('MCA').find().toArray()
  res.json(users)
})
server.listen(8080,()=>{
  console.log("server run at 8080");
})

