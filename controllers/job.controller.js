const Jobs = require("../models/job.model")


const getJobs = async(req, res, next) => {
    try {
        const jobs = await Jobs.find({});
        return res.status(200).send({
            success: true,
            jobs: jobs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "There was an server side error occured.",
            error: error.message
        })
    }
}

const createJob = async(req, res, next) =>{
    try {
        const { title, aboutCompany, jobType, employerEmail, officialEmail } = req.body;
        const { website, salary, workDay, workTime, aboutEmployer, location } = req.body;
        const { requiredTechs, goodToTechs, requirements, responsibilities } = req.body;

        const newJobs = await Jobs({ title, aboutCompany, jobType, employerEmail, officialEmail, website, salary, workDay, workTime, aboutEmployer, location, requiredTechs, goodToTechs, requirements, responsibilities });
        // save the job to db
        await newJobs.save();
        res.send(newJobs)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "There was an server side error occured.",
            error: error.message
        })
    }
}

module.exports = { getJobs, createJob }