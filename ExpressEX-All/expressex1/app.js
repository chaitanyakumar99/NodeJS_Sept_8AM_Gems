import express from 'express'

let app = express()

//URL: http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send("Hello,GM - Get Req")
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running...`)
})