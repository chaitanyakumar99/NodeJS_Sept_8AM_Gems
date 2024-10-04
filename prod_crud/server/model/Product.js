import mongoose from "mongoose";
let prodSchema = mongoose.Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    qty:{type:Number,require:true},
    info:{type:String,require:true}
})
let Product = mongoose.model("products",prodSchema);
export default Product;