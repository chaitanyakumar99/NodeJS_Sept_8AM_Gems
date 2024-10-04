import express from "express";
import ProductModel from '../model/Product.js'
let router = express.Router()

/*USAGE:  Create new Product
  API URL: http://127.0.0.1:8000/create
  Method Type:POST
  Required Fields: name,image,price,qty,info
  Access Type:Public
*/
router.post("/create",async(req,resp)=>{
    try{
        let product = req.body;
        console.log(product);
        product=new ProductModel(product);
        await product.save()
        
        return resp.status(200).json({'msg':"Product created",
                                       'product':product
                                     }
                                    )
    }
    catch(err){
        return resp.status(500).json({'msg':err.message})
    }
})
router.get("/read",()=>{})
router.put("/update/:id",()=>{})
router.delete("/del/:id",()=>{})
router.get("/read/:id",()=>{})

export default router;