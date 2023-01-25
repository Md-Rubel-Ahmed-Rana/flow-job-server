require("dotenv").config()
const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const getUsers = async(req, res) => {
    try {
        const users = await User.find({}).toArray();
        res.send(users)
    } catch (error) {
        res.send({
            success: false,
            message: "Users not found",
        })
    }
}

const getUser = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        res.send(user)
    } catch (error) {
        res.send({
            success: false,
            message: "Users not found",
        })
    }
}

const registerUser = async (req, res) => {
    try {
        const isExist = await User.findOne({ email: req.body.email });
        if (isExist) {
            return res.send({ message: "Email already used" })
        }
        const { name, email } = req.body
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            const newUser = await User({
                name: name,
                email: email,
                password: hash
            })
            await newUser.save().then((user) => {
                res.send({
                    success: true,
                    message: "User created successfully",
                    user: user
                })
            })
        })
    } catch (error) {
        res.send({
            success: false,
            message: "User is not created",
        })
    } 
}

const loginUser = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return res.send({success: false,message: "User not found"})
        }

        // check password
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (!result){
                return res.send({message: "Incorrect password"})
            }

            
            // generate token
            const token = jwt.sign(user.email, process.env.SECRET_KEY);
            res.send({
                success: true,
                message: "User logged in successfully",
                user: { name: user.name, email: user.email },
                token: "Bearer " + token
            })
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        })
    }
}


module.exports = { registerUser, loginUser, getUsers, getUser }