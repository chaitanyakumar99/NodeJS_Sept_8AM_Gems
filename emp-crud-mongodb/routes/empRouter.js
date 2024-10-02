import express from "express";
import EmployeeModel from '../models/Employee.js'
let router = express.Router();

//apis info
/*
    USAGE:Create new Employee:
    URL:http://127.0.0.1:8080/api/create
    Method:POST
    required Fields: eid, ename,esal
    Access Type:Public/private

*/
router.post("/create", async (req,resp)=>{
    try{
        let employee = req.body;
        console.log(employee)
        let emp_Obj=await EmployeeModel.findOne({"eid":employee.eid})
        console.log(emp_Obj)
        if(emp_Obj){
            return  resp.status(401).json({"msg":"Employee alread exists"})
        }
        emp_Obj=new EmployeeModel(employee)
        console.log(emp_Obj)
        emp_Obj=await emp_Obj.save();
        return resp.status(200).json({"msg":"New Employee Created","employee":emp_Obj })
    }
    catch(err){
        return resp.status(500).json({"msg":err.message})
    }
})
/*  USAGE:Fetch all employee from employees mongo db collection
    URL  : http://127.0.0.1:8080/api/read
    Method:GET
    Req Fields:None
    Access Type:Public
*/
router.get("/read",async(req,resp)=>{
    console.log("Test Case - inside Read API")
    try {
        let employees=await EmployeeModel.find()
        return resp.status(200).json(employees)
    } catch (err) {
        return resp.status(500).json({'msg':err.message})
    }
})
/*  USAGE:Delete employee from collection
    URL  : http://127.0.0.1:8080/api/del/57932459808523
    Method:Delete
    Req Fields:None
    Access Type:Public
*/
router.delete("/del/:id",async (req,resp)=>{
    try{
            let emp_Id = req.params.id
            console.log(emp_Id)
            let emp_Obj =await  EmployeeModel.findById(emp_Id);
            console.log(emp_Id)
            if(!emp_Id){
                return resp.status(400).json({"msg":"Employee Not Exits"})
            }
            emp_Obj=await EmployeeModel.findByIdAndDelete(emp_Id)
            return resp.status(200).json({"msg":"Deleted","Deleted Emp":emp_Obj})
    }
    catch (err) {
        return resp.status(500).json({'msg':err.message})
    }
})

export default router;