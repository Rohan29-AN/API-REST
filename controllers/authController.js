const { findUserEmail } = require("../services/userService")
const { readUsers, writeUsers } = require("../utils/fileHandler")

module.exports = {
    async register(req, res) {
        const users = readUsers()
        const { username, email, password } = req.body

        if (users.find((user) => user.email == email)) {
            return res.status(400).json({ message: "Email already registered" })
        }

        const newId = users.length + 1
        const newUser = {
            id: String(newId),
            username,
            email,
            password,
            roles: ['user'],
            profileImage: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        users.push(newUser)
        writeUsers(users);

        res.status(201).json({ message: 'User registered successfully', user: newUser })
    },

    async login(req, res) {
        const { email, password } = req.body
        const user = await findUserEmail(email)

        if (user && password === user.password) {
            res.status(200).json({ message: 'Login successful', user })
        }
        else {
            return res.status(401).json({ message: 'Invalid email or password' })
        }
    }

}