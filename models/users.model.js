import fs from "fs"

const users = [

{id:1,name: "Martin",email: "martin@gmail.com"},
{id:2,name:"Juan",email:"juan@gmail.com"},
{id:3,name:"Pedro",email:"pedro@gmail.com"},
{id:4,name:"Sofia",email:"sofia@gmail.com"},
{id:5,name: "Lucila",email:"lucila@gmail.com"}

]

async function getUsers() {

    
    return await users
    
}

async function postUsers(user) {

    const nuevoID= users[users.length - 1].id + 1
    
    const nuevoUser = {
        id: nuevoID,
        name: user.name,
        email: user.email
    }
    users.push(nuevoUser)

    await fs.promises.writeFile("users.txt",JSON.stringify(users),{encoding:"utf8"})
    
    return await users
}

async function patchUsers(id,user) {

    const position = users.findIndex(e => e.id == id)

    const userUpdated = {...users[position], ...user}
    
    users.splice(position,1,userUpdated)

    await fs.promises.writeFile("users.txt",JSON.stringify(users),{encoding:"utf8"})
 
    return await users
}


export default{

    getUsers,postUsers,patchUsers
}