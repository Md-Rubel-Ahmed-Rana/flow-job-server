const { createCandidate, getAllCandidates } = require("../controllers/candidate.controller");
const candidateDataValidation = require("../validators/candidate.validator");

const router = require("express").Router();


// get all the candidates
router.get("/candidate", getAllCandidates)

// create new candidate
router.post("/candidate", candidateDataValidation, createCandidate)


module.exports = router