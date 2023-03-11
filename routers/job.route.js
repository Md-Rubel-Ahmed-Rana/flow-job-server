const { getJobs, createJob, deleteJob, getSingleJob } = require("../controllers/job.controller");

const jobRouter = require("express").Router();

jobRouter.get("/", getJobs)

jobRouter.get("/:id", getSingleJob)

jobRouter.post("/", createJob);

jobRouter.delete("/:id", deleteJob)

module.exports = jobRouter