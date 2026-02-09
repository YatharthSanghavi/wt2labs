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

exports.deleteFaculty = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await Faculty.findByIdAndDelete({_id:id})
        res.status(200).json({Message:"faculty deleted successfull"})
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.updateFaculty = async(req,res)=>{
    try {
        const {id} = req.params
        const {name} = req.body
        const data = await Faculty.findByIdAndUpdate({_id:id},{name},{new:true})
        res.status(200).json({Message:"faculty update successfull"})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}