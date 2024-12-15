const { readUsers } = require("../utils/fileHandler")

module.exports = {

    async getAllUsers() {
        return readUsers()
    },
    async findUserEmail(email) {
        const users = readUsers();
        return users.find(user => user.email === email)
    },

    sanitizeUserData(user) {
        const { password, ...sanitizedUser } = user
        return sanitizedUser
    },

    async findUserIndex(users, userId) {
        const userIndex = users.findIndex(user => user.id === userId)
        return userIndex
    },

    async findUserById(userId) {
        const users = await module.exports.getAllUsers();
        return users.find(user => user.id == userId)
    }


}