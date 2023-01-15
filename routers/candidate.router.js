const { createCandidate } = require("../controllers/candidate.controller");
const candidateDataValidation = require("../validators/candidate.validator");

const router = require("express").Router();


router.post("/candidate", candidateDataValidation, createCandidate)


module.exports = router