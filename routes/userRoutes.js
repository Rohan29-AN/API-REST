const express = require("express");
const { getUsers, updateUser } = require("../controllers/userController");
const authRoutes = require('./authRoutes');
const { validateInput } = require("../middlewares/validateInput");

const { updateUserSchema } = require("../schemas/userSchema");
const router = express.Router()

router.get('/', getUsers)
router.put('/:id', validateInput(updateUserSchema), updateUser)
router.use('/auth', authRoutes);

module.exports = router;