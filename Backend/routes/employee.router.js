const express = require("express")
const { Employee } = require("../model/employee.model")
const employeeRouter =  express.Router()

employeeRouter.get("/",async(req,res)=>{
    try{
        const data = await Employee.find()
        res.send(data)
    }catch(err){
        res.send("Internal error")
    }
})

employeeRouter.post("/",async(req,res)=>{
    try{
         const {employee_id,name} = req.body
         const employee= new Employee({employee_id,name})
         await employee.save()
         res.send("The employee is added")

    }catch(err){
        res.send("Internal error")
    }
})

module.exports={
    employeeRouter
}