const {readUsers} = require('../utils/fileHandler')

module.exports={

    async getUsers(req,res){
        const users= readUsers()
        //NOTE: Exclude users's password in the response
        const sanitizedUsers = users.map(({password,...user})=>user)

        res.json({
            status: 'success',
            code: 200,
            message: 'Users retrieved successfully',
            data: sanitizedUsers
        })
    }
}