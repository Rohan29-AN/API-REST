const express= require("express");
const { getUsers } = require("../controllers/userController");
const authRoutes = require('./authRoutes')
const router= express.Router()

router.get('/',getUsers)
router.use('/auth', authRoutes);

module.exports= router;