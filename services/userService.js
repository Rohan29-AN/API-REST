const { readUsers } = require("../utils/fileHandler")

module.exports = {
    async findUserEmail(email) {
        const users = readUsers();
        return users.find(user => user.email === email)
    },

    sanitizeUserData(user) {
        const { password, ...sanitizedUser } = user
        return sanitizedUser
    },

    async findUserIndex(userId) {
        const users = readUsers()
        const userIndex = users.findIndex(user => user.id === userId)
        return userIndex
    }
}