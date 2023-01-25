require("dotenv").config();
require("./config/passport")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const candidateRouter = require("./routers/candidate.router");
const recruiterRouter = require("./routers/recruiter.router");
const userRouter = require("./routers/user.router");
const DB_URI = require("./config/config");
const passport = require("passport");

// create express app
const app = express();
const port = process.env.PORT || 5000;

// global middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(passport.initialize())


// global route to test
app.get("/", (req, res) => {
    res.send("Job portal server is running")
})


// ========== routes ===============
// candidate route
app.use("/api", candidateRouter)

// recruiter route
app.use("/api/recruiter", recruiterRouter);


app.use("/api", userRouter)


// private route
app.get('/profile', passport.authenticate('jwt', { session: false }),
    function (req, res) {
        res.send({
            success: true,
            message: "User logged in successfully",
            user: {
                name: req.user.name,
                email: req.user.email
            }
        });
    }
);

mongoose.set('strictQuery', false)
// connecting to database
mongoose.connect(DB_URI, () => {
    console.log("Database connected");
})


// listen the app on a port
app.listen(port, () => {
    console.log(`Server is running ot port ${port}`)
})