const Joi = require("joi");

const recruiterDatavalidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(10).required()
    });
    const {error} = schema.validate(req.body, {abortEarly: false, errors: { wrap: {label: ""} } });

    if (error){
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({errors: errors})
    }
    next()
}

module.exports = recruiterDatavalidator

