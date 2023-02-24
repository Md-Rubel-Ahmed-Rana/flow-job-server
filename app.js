const express = require("express");
const cors = require("cors");
const candidateRouter = require("./routers/candidate.router");
const recruiterRouter = require("./routers/recruiter.router");
const passport = require("passport");
const generateToken = require("./middleware/generateToken");
const verifyPassword = require("./middleware/verifyPassword");
const userRouter = require("./routers/user.router");
// create express app
const app = express();

// global middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(passport.initialize())

// global route to test
app.get("/", (req, res) => {
    res.send("Job portal server is running")
})

// ========== routes ===============
// candidate route
app.use("/api/candidates", candidateRouter)
// recruiter route
app.use("/api/recruiters", recruiterRouter);

// testing route for user register
app.use("/users", userRouter)

// private route
app.post('/login', verifyPassword, generateToken, (req, res) => {
    const user = req.user
    const token = req.token
    res.send({ user, token })
});

app.get("/profile", passport.authenticate('jwt', { session: false }, (req, res) => {
    console.log(req);
}))

// error handler

module.exports = app