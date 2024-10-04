import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routes/productRouter.js'
//create express app 
let app = express();

//load config values
dotenv.config({path:'./config/dev.config'})
let port = process.env.PORT;
let host = process.env.HOST_NAME;
let dburl = process.env.MONGO_DB_LOCAL_URL;
//read form data
app.use(express.json())

//enable cors policy
app.use(cors())

//http looger
app.use(morgan('dev'))
//root api 
app.get("/",(req,resp)=>{
    resp.send("Root Request")
})
//routes
app.use("/product",productRouter)

//connect mongodb
mongoose.connect(dburl)
        .then(()=>{
            console.log("MongoDB Connection Successfull!")
        })
        .catch(()=>{})
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is Running! http://${host}:${port}/`)
})