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

const getSingleJob = async(req, res, next) => {
    try {
        const id = req.params.id
        const job = await Jobs.findOne({_id: id});
        return res.status(200).send({
            success: true,
            job: job
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
        const { title, companyName, companySize, jobType, jobPlace, overview, location, employerEmail, officialEmail } = req.body;
        const { website, salary, workDay, workTime, experience } = req.body;
        const { skills, requirements, responsibilities, employerType  } = req.body;

        const newJob = await Jobs({ title, companyName, companySize, jobType, jobPlace, overview, location, employerEmail, officialEmail, website, salary, workDay, workTime, experience, employerType, skills, requirements, responsibilities });
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

const deleteJob = async(req, res, next) => {
    try {
        const id = req.params.id;
        await Jobs.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Job deleted successfully",
        }) 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "There was an server side error occured.",
            error: error.message
        })
    }
}

const applyJob = async(req, res, next) => {
    try {
        const { jobId, candidateId, candidateEmail } = req.body;
        const filter = { _id: jobId }
        const application = { jobId, candidateId, candidateEmail };
        const updatedDoc = {
            $push: { applicants: application }
        }
        const result = await Jobs.updateOne(filter, updatedDoc);
        if (result?.modifiedCount > 0 && result?.acknowledged) {
            return res.status(200).json({
                success: true,
                message: "Application sent to Employer"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "There was an server side error occured.",
            error: error.message
        })
    }
}

const getMyJobs = async(req, res, next) => {
    const email = req.params.email;
    const query = { applicants: { $elemMatch: { candidateEmail: email } } };
    const myJobs = await Jobs.find(query)
    res.status(200).json(myJobs)
}

module.exports = { getJobs, createJob, deleteJob, getSingleJob, applyJob, getMyJobs }