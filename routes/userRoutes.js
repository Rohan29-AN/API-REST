const express = require("express");
const { getUsers, updateUser, updateUserEmail, deleteUser } = require("../controllers/userController");
const authRoutes = require('./authRoutes');
const { validateInput } = require("../middlewares/validateInput");

const { updateUserSchema, updateEmailSchema } = require("../schemas/userSchema");
const router = express.Router()

router.use('/auth', authRoutes);
/**
 * @swagger
 * components:
 *   schemas:
 *     GetUser:
 *       type: object
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
 *         roles:
 *           type:  array
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
 * components:
 *   responses:
 *     ValidationError:
 *       description:  Validation failed
 *       content:
 *         application/json:
 *           schema:
 *             type:  object
 *             properties:  
 *               message:
 *                 type:  string
 *                 description:  Error message
 *       
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary:  Get all users
 *     tags:  [users]
 *     responses:
 *       200:
 *         description:  Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *               properties:
 *                 status:
 *                   type:  string
 *                   description: Operation status
 *                   example:  "success"
 *                 code:
 *                   type:  integer
 *                   description:  HTTP response status code
 *                   example:  200
 *                 message: 
 *                   type:  string
 *                   description:  Return message
 *                   example: "Users retrieved successfully"
 *                 data:
 *                   type:  array
 *                   items:
 *                     $ref:  '#/components/schemas/GetUser'
 */
router.get('/', getUsers)

/**
 * @swagger
 * /api/users/{id}: 
 *   put:
 *     summary:  Update an existing user (username, email, password)
 *     tags:  [users]
 *     parameters:
 *       - name:  id
 *         in:  path
 *         description:  The user id to be changed
 *         required:  true
 *         schema:
 *           type:  integer
 *     requestBody:
 *       required:  true
 *       content:
 *         application/json:
 *           schema: 
 *             type:  object
 *             properties:  
 *               username:  
 *                 type:  string
 *                 description:  The new name of user
 *                 minLength:  3
 *               email:
 *                 type:  string
 *                 description: The new email of user
 *                 format:  email
 *               password:
 *                 type:  string
 *                 description: The new password
 *                 minLength:  6
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
 *       400:
 *         $ref:  '#/components/responses/ValidationError'
 */
router.put('/:id', validateInput(updateUserSchema), updateUser)


/**
 * @swagger
 * /api/users/{id}/email:
 *   patch:
 *     summary:  Update the user's email address
 *     tags:  [users]
 *     parameters:
 *       - name:  id
 *         in:  path
 *         description:  The user ID
 *         required:  true
 *         schema:  
 *           type:  integer
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
 *                 description:  The new email address
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
 *       404:
 *         description:  User not found
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *               properties:
 *                 message:
 *                   description:  The error message
 *                   type:  string
 *                   example:  User not found
 *       400:
 *         $ref:  '#/components/responses/ValidationError'
 *            
 */
router.patch('/:id/email', validateInput(updateEmailSchema), updateUserEmail)


/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary:  Delete a user
 *     tags:  [users]
 *     parameters:
 *       - name:  id
 *         in:  path
 *         description:  The user's ID to be deleted
 *         required:  true
 *         schema:  
 *           type:  integer
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
 *       404:
 *         description:  User not found
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *               properties:
 *                 message:
 *                   description:  The error message
 *                   type:  string
 *                   example:  User not found           
 */
router.delete('/:id', deleteUser)

module.exports = router;