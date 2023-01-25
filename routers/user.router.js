const { registerUser, loginUser,  getUsers, getUser } = require("../controllers/user.controller");

const router = require("express").Router();


// create new user
router.post("/register", registerUser);

router.post("/login", loginUser);

// get all users
router.get("/users", getUsers);


// get a user
router.get("/user", getUser);



module.exports = router