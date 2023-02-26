const { createCandidate, getAllCandidates, getSingleCandidate } = require("../controllers/candidate.controller");
const candidateDataValidation = require("../validators/candidate.validator");

const router = require("express").Router();


// get all the candidates
router.get("/", getAllCandidates);

// get a single candidate
router.get("/:email", getSingleCandidate);

// create new candidate
router.post("/", candidateDataValidation, createCandidate)


module.exports = router