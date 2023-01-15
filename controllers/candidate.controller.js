const Candidate = require("../models/candidate.model")



// get all the candidates
const getAllCandidates = async(req, res) => {
    const candidates = await Candidate.find({});
    res.status(200).json({ success: true, candidates: candidates })
}


// create new user
const createCandidate =  async(req, res) => {
    try {
        const newCandidate = new Candidate({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            skills: req.body.skills
        })
        await newCandidate.save()
        res.status(201).send({success: true, message: "Account created successfully"})
    } catch (error) {
        res.send(error)
    }
}


module.exports = { createCandidate, getAllCandidates }