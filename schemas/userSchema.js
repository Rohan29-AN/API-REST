const Joi = require("joi");
const { email, password } = require("./sharedSchema");

const loginSchema = Joi.object({
    email,
    password
})

const registerSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email,
    password
})

const updateUserSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email,
    password
})

const updateEmailSchema = Joi.object({
    email
})

module.exports = {
    loginSchema,
    registerSchema,
    updateUserSchema,
    updateEmailSchema
}
