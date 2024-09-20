import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import apiRouter from './routes/apiRouter.js'

//create express app 
let app = express()
//load configuration values
dotenv.config({path:'./config/prod.config'})
let port = process.env.PORT
let hostname = process.env.hostname

//http logger middleware
app.use(morgan('tiny'))

//API Root Request  URL: http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.json({"msg":"Root Request"})
})
//route your Rest API to respective api's
app.use("/api",apiRouter);

app.listen(port,hostname,(err)=>{
    if(err) throw err 
    console.log(`Server is Running http://${hostname}:${port}/`)
})