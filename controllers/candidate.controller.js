const Candidate = require("../models/candidate.model")
const Recruiter = require("../models/recruiter.model")
const bcrypt = require("bcrypt");

// get all the candidates
const getAllCandidates = async(req, res) => {
    try {
        const candidates = await Candidate.find({});
        res.status(200).json({ success: true, candidates: candidates })
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}

// create new user
const createCandidate =  async(req, res) => {
    try {
        const candidate = await Candidate.findOne({ email: req.body.email });
        const recruiter = await Recruiter.findOne({ email: req.body.email });
        if (recruiter || candidate) { return res.send({ error: "Account already used" }) }
        bcrypt.hash(req.body.password, 10, async(err, hashedPassword) => {
            if(err){return res.send({error: err.message})}
            const { name, email, skills } = req.body
            const newCandidate = new Candidate({ name, email, password: hashedPassword, skills })
            await newCandidate.save()
            res.status(201).send({ success: true, message: "Account created successfully" })
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


module.exports = { createCandidate, getAllCandidates }