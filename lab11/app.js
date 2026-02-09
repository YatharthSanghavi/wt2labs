const express = require("express")
const mongoose = require('./config/db');
const FacultyRoutes = require("./routes/facultyRoutes");

const app = express()

app.use('/faculty',FacultyRoutes);

app.listen(3000,()=>{
    console.log("server is running");
})