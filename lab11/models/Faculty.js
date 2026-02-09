const mongoose = require('mongoose')

const faculty = mongoose.Schema({
    id:Number,
    name:String,
},{timestamps:true})

module.exports = mongoose.model("faculty",faculty)