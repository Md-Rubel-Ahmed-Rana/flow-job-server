const Recruiter = require("../models/recruiter.model");


const createRecruiter = async(req, res) => {
    const newRecruiter = new Recruiter({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.send(newRecruiter)
}

module.exports = createRecruiter