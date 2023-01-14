const { validationResult, check } = require("express-validator");

const runValidation = [
        check("name")
            .trim()
            .notEmpty()
            .withMessage("Name is missing")
            .isLength({ min: 5 })
            .withMessage("Name must have 5 charecters"),
        check("email")
            .notEmpty()
            .isEmail()
            .withMessage("Not a valid email"),
        check("password")
            .notEmpty()
            .withMessage("Password is not valid")
            .isLength({ min: 8 })
            .withMessage("Password must have 8 charecters"),
        (req, res, next) => {
            console.log("From error");
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()})
            }
            next()
        }
    ]

module.exports = runValidation