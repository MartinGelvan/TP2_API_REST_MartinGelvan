import express from "express"
import usersRoutes from "./routes/users.routes.js"


const app = express()
const PORT = 8080
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/",usersRoutes)

app.listen(PORT,()=>console.log("Server Running..."))
app.on("Error",(error)=>console.log("Error: ",error))


