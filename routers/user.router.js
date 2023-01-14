const { createUser, getUsers } = require("../controllers/user.controller");
const runValidation = require("../validators/user.validator");

const router = require("express").Router();

router.get("/", getUsers);

router.post("/users", runValidation, createUser)


module.exports = router