const { getJobs, createJob } = require("../controllers/job.controller");

const jobRouter = require("express").Router();

jobRouter.get("/", getJobs)

jobRouter.post("/", createJob)

module.exports = jobRouter