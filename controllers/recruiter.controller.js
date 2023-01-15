const Recruiter = require("../models/recruiter.model");

// get all the recruiters
const getAllRecruiters = async(req, res) => {
    try {
        const candidates = await Recruiter.find({});
        res.status(200).json({ success: true, candidates: candidates })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}



// create new recruiter
const createRecruiter = async(req, res) => {
    try {
        const { name, email, password } = req.body
        const newRecruiter = new Recruiter({ name, email, password });
        await newRecruiter.save()
        res.status(201).json({ success: true, message: "Account created successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createRecruiter, getAllRecruiters }