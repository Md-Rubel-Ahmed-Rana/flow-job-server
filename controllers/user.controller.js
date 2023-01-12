const User = require("../models/user.model")


const getUsers = (req, res) => {

}

// create new user
const createUser = async(req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save()
        res.status(201).send({success: true, message: "User created successfully"})
    } catch (error) {
        res.send(error)
    }
}


module.exports = { createUser, getUsers }