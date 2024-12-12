const fs = require('fs')
const path = require('path')
const filePath = '../data/'
const userFilePath = path.join(__dirname,`${filePath}users.json`)


const readUsers= ()=>{
    const data= fs.readFileSync(userFilePath,'utf-8')
    return JSON.parse(data)
}

const writeUsers = (user)=>{
    fs.writeFileSync(userFilePath,JSON.stringify(user,null,2),'utf-8')
}

module.exports = {readUsers,writeUsers}