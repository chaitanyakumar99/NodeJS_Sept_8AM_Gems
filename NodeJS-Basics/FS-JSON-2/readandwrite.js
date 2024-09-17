import fs from 'fs'
import { type } from 'os'

fs.readFile("data.json",'utf-8',(err,data)=>{
    if(err) throw err 
    let users = JSON.parse(data);
    /* console.log(typeof data)
    console.log(typeof users) */

    let male_Users=[]
    let female_Users=[]

    for(let user of users){
            if(user.gender ==="Male"){
                male_Users.push(user)
            }
            if(user.gender ==="Female"){
                female_Users.push(user)
            }
    }
    fs.writeFile("male.json", JSON.stringify(male_Users),(err)=>{
        if(err) throw err 
        console.log("New JSON File Created") 
    })
    fs.writeFile("fmale.json", JSON.stringify(female_Users),(err)=>{
        if(err) throw err 
        console.log("New JSON File Created") 
    })

})