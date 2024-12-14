const express= require("express");
const { register, login } = require("../controllers/authController");
const { validateInput } = require("../middlewares/validateInput");
const {loginSchema,registerSchema} = require('../schemas/userSchema')
const router= express.Router()

router.post('/register',validateInput(registerSchema), register);
router.post('/login',validateInput(loginSchema),login);

module.exports= router;