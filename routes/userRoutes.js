const express= require("express");
const { getUsers, updateUser } = require("../controllers/userController");
const authRoutes = require('./authRoutes')
const router= express.Router()

router.get('/',getUsers)
router.put('/:id',updateUser)
router.use('/auth', authRoutes);

module.exports= router;