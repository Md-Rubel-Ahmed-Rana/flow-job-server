const Candidate = require("../models/candidate.model")
const Recruiter = require("../models/recruiter.model")

// get all the candidates
const getAllCandidates = async (req, res, next) => {
    try {
        const candidates = await Candidate.find({});
        res.status(200).json({ success: true, candidates: candidates })
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}

// create new user
const createCandidate = async (req, res, next) => {
    try {
        const candidate = await Candidate.findOne({ email: req.body.email });
        const recruiter = await Recruiter.findOne({ email: req.body.email });
        if (recruiter || candidate) { return res.send({ error: "Account already used" }) }
        const { name, email, role } = req.body
        const newCandidate = new Candidate({ name, email, role })
        await newCandidate.save()
        res.status(201).send({ success: true, message: "Account created successfully" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getSingleCandidate  = async(req,res, next) => {
    console.log(req.params.email);
    const candidate = await Candidate.findOne({ email: req.params.email });
    console.log(candidate);
    // res.send(candidate)
}

module.exports = { createCandidate, getAllCandidates, getSingleCandidate }