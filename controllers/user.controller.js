const User = require("../models/user.model")


const getUsers = (req, res) => {
    res.send("All users")
}

// create new user
const createUser =  (req, res) => {
    console.log("From controller");
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.send(newUser)
        // await newUser.save()
        // res.status(201).send({success: true, message: "User created successfully"})
    } catch (error) {
        res.send(error)
    }
}


module.exports = { createUser, getUsers }