import usersModel from "../models/users.model.js"


async function getUsers() {
    return await usersModel.getUsers()
}

async function postUsers(user) {
    return await usersModel.postUsers(user)
}
async function patchUsers(id,user) {
    return await usersModel.patchUsers(id,user)
}




export default{
    getUsers,postUsers,patchUsers
}