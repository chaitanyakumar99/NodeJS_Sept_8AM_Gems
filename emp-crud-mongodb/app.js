import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import dotevn from 'dotenv'
import cors from 'cors'
import employeeRouter from './routes/empRouter.js'
let app = express()

dotevn.config({path:'./config/dev.env'})
let port = process.env.PORT
let host= process.env.HOST_NAME
let mongodb_url=process.env.MongoDB_LOCAL_URL

 
//http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send("Root Request!")
})
app.use("/api",employeeRouter)

mongoose.connect(mongodb_url)
    .then((resp)=>{
        console.log("MongoDB -Connection successfull!")
    })
    .catch((err)=>{})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running!... http://${host}:${port}/`)
})