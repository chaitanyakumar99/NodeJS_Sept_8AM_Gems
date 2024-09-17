import fs from 'fs'

/* let content = fs.readFileSync('abc.txt','utf-8')
console.log(content) */
//fs.readFile('abc.txt','utf-8',()=>{})
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err 

    console.log(data)
})