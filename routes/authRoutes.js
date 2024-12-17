const express = require("express");
const { register, login } = require("../controllers/authController");
const { validateInput } = require("../middlewares/validateInput");
const { loginSchema, registerSchema } = require('../schemas/userSchema')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type:  object
 *       properties:
 *         id:
 *           type:  string
 *           description:  The user id
 *         username:
 *           type:  string
 *           description: The user's name
 *         email:
 *           type:  string
 *           description:  The user's email
 *         password:
 *           type:  string
 *           description:  The user's password
 *         roles:
 *           type:  Array
 *           description:  The user's roles
 *           items:
 *             type:  string
 *         profileImage:
 *           type:  string
 *           description:  Link to the user's profile picture
 *         createdAt:
 *           type:  string
 *           description:  User creation date
 *         updateAt:
 *           type:  string
 *           description:  Date of modification of user data
 *           
 */


/**
 * @swagger
 * /api/users/auth/register:
 *   post:
 *     summary:  Register a new user
 *     tags:  [users]
 *     requestBody:
 *       required:  true
 *       content:
 *         application/json:
 *           schema:
 *             type:  object
 *             properties:
 *               username:  
 *                 type:  string
 *                 description: The user's name
 *               email:
 *                 type:  string
 *                 format:  email
 *                 description:  The user's email
 *               password: 
 *                 type:  string
 *                 minLength:  8
 *                 description:  The user's password
 *     responses:
 *       201:
 *         description:  Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *               properties: 
 *                 message:  
 *                   type:  string
 *                   description:  The response message  
 *                 user:
 *                   $ref:  '#/components/schemas/User'   
 */
router.post('/register', validateInput(registerSchema), register);


/**
 * @swagger
 * /api/users/auth/login:
 *   post:
 *     summary:  Authentification
 *     tags:  [users]
 *     requestBody:
 *       required:  true
 *       content:
 *         application/json:
 *           schema:
 *             type:  object
 *             properties:
 *               email:
 *                 type:  string
 *                 format:  email
 *                 description:  The user's email
 *               password: 
 *                 type:  string
 *                 minLength:  8
 *                 description:  The user's password
 *     responses:
 *       200:
 *         description:  Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *               properties: 
 *                 message:  
 *                   type:  string
 *                   description:  The response message  
 *                 user:
 *                   $ref:  '#/components/schemas/User'  
  *       401:
 *         description:  Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *               properties: 
 *                 message:  
 *                   type:  string
 *                   description:  The response message
 */
router.post('/login', validateInput(loginSchema), login);

module.exports = router;