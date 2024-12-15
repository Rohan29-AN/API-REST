const { sanitizeUserData, findUserIndex, getAllUsers, findUserById } = require('../services/userService')
const { readUsers } = require('../utils/fileHandler')

module.exports = {

    async getUsers(req, res) {
        const users = readUsers()
        //NOTE: Exclude users's password in the response
        const sanitizedUsers = users.map(sanitizeUserData)

        res.json({
            status: 'success',
            code: 200,
            message: 'Users retrieved successfully',
            data: sanitizedUsers
        })
    },

    async updateUser(req, res) {
        const userId = req.params.id
        const updatedData = req.body

        //find user and replace their data
        const users = await getAllUsers()
        const userIndex = await findUserIndex(users, userId)
        if (userIndex == -1) {
            return res.status(404).json({ message: 'User not found' })
        }

        users[userIndex] = { ...users[userIndex], ...updatedData }
        res.status(200).json({ message: 'User updated successfully', user: users[userIndex] })
    },

    async updateUserEmail(req, res) {
        const userId = req.params.id
        const { email } = req.body

        const user = await findUserById(userId)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        else {
            user.email = email
            res.status(200).json({
                message: 'Email updated successfully',
                user
            })
        }

    }
}