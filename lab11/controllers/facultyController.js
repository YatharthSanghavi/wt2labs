const Faculty = require("../models/Faculty");

exports.getallFaculty = async (req,res)=>{
    try {
        const Faculties = await Faculty.find()
        res.json(Faculties)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.getallFacultybyId = async (req,res)=>{
    try {
        const Facultyid = await Faculty.findById(req.params.id)
        if(!Facultyid){
            return res.status(404).json({message:'faculty not found'})
        }
        res.json(Facultyid);
    } catch (error) {
        res.status(500).json({error});
    }
}