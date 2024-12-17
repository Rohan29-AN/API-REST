const express= require("express");
const { register, login } = require("../controllers/authController");
const { validateInput } = require("../middlewares/validateInput");
const {loginSchema,registerSchema} = require('../schemas/userSchema')
const router= express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type:  object
 *       properties:
 *         id:
 *           type:  String
 *           description:  The user id
 *         username:
 *           type:  String
 *           description: The user's name
 *         email:
 *           type:  String
 *           description:  The user's email
 *         roles:
 *           type:  Array
 *           description:  The user's roles
 *           items:
 *             type:  String
 *         profileImage:
 *           type:  String
 *           description:  Link to the user's profile picture
 *         createdAt:
 *           type:  String
 *           description:  User creation date
 *         updateAt:
 *           type:  String
 *           description:  Date of modification of user data
 *           
 */


router.post('/register',validateInput(registerSchema), register);
router.post('/login',validateInput(loginSchema),login);

module.exports= router;