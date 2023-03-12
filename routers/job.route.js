const { getJobs, createJob, deleteJob, getSingleJob, applyJob } = require("../controllers/job.controller");

const jobRouter = require("express").Router();

jobRouter.get("/", getJobs)

jobRouter.get("/:id", getSingleJob)

jobRouter.post("/", createJob);

jobRouter.delete("/:id", deleteJob)

jobRouter.patch("/apply/:id", applyJob)

module.exports = jobRouter