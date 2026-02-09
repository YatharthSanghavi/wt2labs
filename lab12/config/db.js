const mongoose = require('mongoose');
const mongourl = "mongodb://localhost:27017/faculty"

async function connectDb(){ 
  try {
    const connect = await mongoose.connect(mongourl);
    console.log("connect: "+connect.connection.host);
  } catch (error) {
    console.log(error);
  }
}

connectDb()