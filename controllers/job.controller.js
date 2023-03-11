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
        const { title, jobType, employerEmail, officialEmail } = req.body;
        const { website, salary, workDay, workTime, aboutEmployer, location } = req.body;
        const { skills, requirements, responsibilities } = req.body;


        const newJob = await Jobs({ title, jobType, location, employerEmail, officialEmail, website, salary, workDay, workTime, aboutEmployer, skills, requirements, responsibilities });
        // save the job to db
        await newJob.save();
        return res.status(201).json({
            success: true,
            message: "New Job added successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "There was an server side error occured.",
            error: error.message
        })
    }
}

module.exports = { getJobs, createJob }