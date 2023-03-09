const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    employerEmail: {
        type: String,
        required: true
    },
    officialEmail: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    workDay: {
        type: String,
        required: true
    },
    workTime: {
        type: String,
        required: true
    },
    aboutEmployer: {
        type: String,
        required: true
    },
    requiredTechs: {
        type: String,
        required: true
    },
    goodToTechs: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    responsibilities: {
        type: String,
        required: true
    },
    aboutCompany: {
        type: String,
        required: true
    },
})
const Jobs = mongoose.model("Job", jobSchema);
module.exports = Jobs