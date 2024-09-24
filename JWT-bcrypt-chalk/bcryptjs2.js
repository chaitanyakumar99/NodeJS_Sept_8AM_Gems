import bcrypt from 'bcrypt'

let user={
    email:"Rahul@gmail.com",
    cc:'1234123456785678',
    password:"123456789",
    mobile:"9591619191"
}
let salt = bcrypt.genSaltSync(10)
let new_PW=bcrypt.hashSync(user.password,salt)
console.log(new_PW)

let flag = bcrypt.compareSync("123",new_PW)

if(flag){
    console.log("Login Success")
}
else{
    console.log("Login failed")
}