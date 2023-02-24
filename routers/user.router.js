const { createUser, getUsers } = require("../controllers/user.controller");

const router = require("express").Router();

// create new user
router.post("/", createUser)
router.get("/", getUsers)


module.exports = router