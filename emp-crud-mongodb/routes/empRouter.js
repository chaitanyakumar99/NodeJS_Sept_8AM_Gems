import express from "express";
import EmployeeModel from '../models/Employee.js'
let router = express.Router();

//apis info
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
export default router;