const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n72f5gi.mongodb.net/flow-job-portal`;
const mongoose = require("mongoose");


mongoose.set('strictQuery', false)
// connecting to database
mongoose.connect(DB_URI, () => {
    console.log("Database connected");
})


module.exports = DB_URI