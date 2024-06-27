const express = require("express")
const { connection } = require("./config/db")
const { employeeRouter } = require("./routes/employee.router")
const cors = require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to the employee table!")
})


app.use("/employees",employeeRouter)

 const port = 8080

app.listen(port,async()=>{
    try{
        await connection
        console.log("DB is connected")
    }catch(err){
        console.log("Some internal error")
    }
    console.log(`The server is listning to port : ${port}`)
})
