const express = require("express");
const { getUsers, updateUser, updateUserEmail, deleteUser } = require("../controllers/userController");
const authRoutes = require('./authRoutes');
const { validateInput } = require("../middlewares/validateInput");

const { updateUserSchema, updateEmailSchema } = require("../schemas/userSchema");
const router = express.Router()

router.use('/auth', authRoutes);

router.get('/', getUsers)
router.put('/:id', validateInput(updateUserSchema), updateUser)
router.patch('/:id/email', validateInput(updateEmailSchema), updateUserEmail)
router.delete('/:id', deleteUser)

module.exports = router;