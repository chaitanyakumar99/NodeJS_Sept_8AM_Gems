import express from 'express'
let router = express.Router();
/*
    API URL: http://127.0.0.1:8080/user/read
    Method:GET
*/
router.get("/read",(req,resp)=>{
    resp.send("User - read - Request")
})


/*
    API URL: http://127.0.0.1:8080/user/add
    Method:POST
*/
router.post("/add",(req,resp)=>{
   return resp.json({"msg":"new user created"})
})

/*
    API URL: http://127.0.0.1:8080/user/del
    Method:DELETE
*/
router.delete("/del",(req,resp)=>{
    return resp.json({"msg":"User Deleted Successfully"})
 })
 

export default router;
