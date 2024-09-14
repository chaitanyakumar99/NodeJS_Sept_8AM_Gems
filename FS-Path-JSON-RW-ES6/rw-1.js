import fs from 'fs'
import path from 'path'

let datafile = path.join(process.cwd(),"static","data","data.json")

fs.readFile(datafile,'utf-8',(err,data)=>{
    if(err) throw err 
    let users=JSON.parse(data)
    let male_users=users.filter((user)=>{
        return user.gender ==="Male"
    })
    let filepath=path.join(process.cwd(),"static","male","male.json");
    console.log(filepath)
    fs.writeFile(filepath,JSON.stringify(male_users),(err)=>{
        if(err) throw err 

        console.log("New File Created")
    })
   

})