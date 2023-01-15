const Candidate = require("../models/user.model")



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


module.exports = { createCandidate }