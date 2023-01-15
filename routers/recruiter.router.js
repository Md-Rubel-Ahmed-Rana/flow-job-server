const createRecruiter = require("../controllers/recruiter.controller");
const recruiterDatavalidator = require("../validators/recruiter.validator");

const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("Recruiter router is working fine")
});


// create recruiter
router.post("/", recruiterDatavalidator, createRecruiter)



module.exports = router