import usersServices from "../services/users.services.js";

async function getUsers(req,res) {

    const data = await usersServices.getUsers()
    res.send(data)
    
}

async function postUsers(req,res) {

    const usuario = req.body
    const data = await usersServices.postUsers(usuario)
    res.send(data)
    
}

async function patchUsers(req,res) {
    
    const {id} = req.params
    const usuario = req.body

    const data = await usersServices.patchUsers(id,usuario)
    res.send(data)
    
}


export default{
    getUsers,postUsers,patchUsers
}