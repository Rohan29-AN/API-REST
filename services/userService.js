const { readUsers } = require("../utils/fileHandler")

module.exports={
    async findUserEmail(email){
        const users= readUsers();
        return users.find(user=>user.email === email)
    },

    sanitizeUserData(user){
        const {password,...sanitizedUser} = user
        return sanitizedUser
    }
}