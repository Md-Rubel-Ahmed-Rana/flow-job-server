const User = require("../models/user.model")

const createUser = async(req, res, next) => {
    const {name, email, role} = req.body;
    const user = new User({ name, email, role });
    await user.save((err) => {
        if(err){
            res.send({message: "There was a server side error occured"})
        }
        res.send({ message: "User created successfully"})
    })
}

const getUsers = async(req, res, next) => {
    const users = await User.find({});
    res.send({users: users})
}

module.exports = { createUser, getUsers }