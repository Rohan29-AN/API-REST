const Joi = require("joi");

const email = Joi.string().email().required()
const password = Joi.string().min(6).required()

module.exports={
    email,
    password
}