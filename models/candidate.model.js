const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    skills:{
    type: Array,
    },
    role: {
        type: String,
        default: "candidate",
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Candidate", candidateSchema)