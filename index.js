const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routers/user.router");
const DB_URI = require("./config/config");

// create express app
const app = express();
const port = process.env.PORT || 5000;

// global middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());


// global route to test
app.get("/", (req, res) => {
    res.send("Job portal server is running")
})


// routes

// user route
app.use(userRouter)


mongoose.set('strictQuery', false)

// connecting to database
mongoose.connect(DB_URI, () => {
    console.log("Database connected");
})


// listen the app on a port
app.listen(port, () => {
    console.log(`Server is running ot port ${port}`)
})