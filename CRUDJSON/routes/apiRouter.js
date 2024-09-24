import express from 'express'
import fs from 'fs'
let router  = express.Router();
/*
Usage : create new employee/user/product/order
API URL: http://127.0.0.1:8080/api/create
Method Type: POST
Required Fields: eid,ename,esal,loc
Access Type:Public
Note: we need to verify employee exist or not. 
If employee not exit we are going to create new employee
*/
router.post("/create",async(req,resp)=>{
    let employee = req.body;
    let employees = await getEmployees()
    let emp_Data  = employees.find((emp)=>{
        return emp.eid == employee.eid;
    })
    console.log(emp_Data)
    if(emp_Data){
        return resp.status(401).json({"msg":"Employee Already exists"})
    }
    employees.push(employee)
    savemployees(employees)
    return resp.status(200).json({"msg":"New Employee Created"})
});

/*
Usage : fetch all employees/users/products/orders
API URL: http://127.0.0.1:8080/api/read
Method Type: GET
Required Fields: None
Access Type:Public
*/
router.get("/read", async (req,resp)=>{
    let employees = await getEmployees()
    return resp.json(employees)
});

/*
Usage : update employee/user/product/order
API URL: http://127.0.0.1:8080/api/update/102
Method Type: PUT
Required Fields: eid,ename,esal,loc
Access Type:Public
Note: we need to verify employee exist or not. 
If employee exit we are going to update employee
*/
router.put("/update/:id", async(req,resp)=>{
    let emp_Id = req.params.id;
    let employee = req.body;
    let employees =await getEmployees();
    console.log(emp_Id)
    console.log(employee)
    console.log(employees)
    let emp_Data=employees.find((emp)=>{
        return emp.eid ==emp_Id
    })
    console.log(emp_Data)
    if(!emp_Data){
        return resp.status(401).json({"msg":"Employee Not Exits"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid != emp_Id
    })
    remaining_Employees.unshift(employee);
    console.log(remaining_Employees)
    savemployees(remaining_Employees);
    return resp.status(200).json({"msg":"Employee updated successfully!"})
});

/*
Usage : delete employee/user/product/order
API URL: http://127.0.0.1:8080/api/del/102
Method Type: DELETE
Required Fields: None
Access Type:Public
Note: we need to verify employee exist or not. 
If employee exits we are going to delete employee
*/
router.delete("/del/:id", async (req,resp)=>{
    let emp_Id= req.params.id;
    let employees= await getEmployees();
    let emp_Data = employees.find((emp)=>{
        return emp.eid  == emp_Id
    })
    if(!emp_Data){
        return resp.status(401).json({"msg":"Employee Does Not Exits"})
    }
    let remaining_Employees = employees.filter((emp)=>{
        return emp.eid !=emp_Id;
    })
    savemployees(remaining_Employees);
    return resp.status(200).json({"msg":"Deleted Successfully"})

})


let getEmployees= ()=>{
    let emp_Data=fs.readFileSync('data.json','utf-8')
    return JSON.parse(emp_Data)
}

let savemployees = (employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}
export default router;