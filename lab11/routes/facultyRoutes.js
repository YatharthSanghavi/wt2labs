const express = require('express')
const { getallFaculty, getallFacultybyId } = require("../controllers/facultyController")
const FacultyRoutes = express.Router()

FacultyRoutes.get('/',getallFaculty)
FacultyRoutes.get('/:id',getallFacultybyId)

module.exports = FacultyRoutes