const express = require('express')
const { getallFaculty, getallFacultybyId, deleteFaculty, updateFaculty } = require("../controllers/facultyController")
const FacultyRoutes = express.Router()

FacultyRoutes.get('/',getallFaculty)
FacultyRoutes.get('/:id',getallFacultybyId)
FacultyRoutes.delete('/:id',deleteFaculty)
FacultyRoutes.put('/:id',updateFaculty)

module.exports = FacultyRoutes