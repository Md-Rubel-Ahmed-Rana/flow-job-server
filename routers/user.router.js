const { createUser, getUsers } = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", getUsers)

router.post("/", createUser)


module.exports = router