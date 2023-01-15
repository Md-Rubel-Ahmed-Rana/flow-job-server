const { validationResult, check } = require("express-validator");

const candidateDataValidation = [
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
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errs = errors.array().map((error) => error.msg)
                return res.status(400).json({ errors: errs })
            }
            next()
        }
    ]

module.exports = candidateDataValidation