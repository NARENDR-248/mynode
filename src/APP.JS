const express=require("express")
const app=express()
// app.use("/user",(req,res,next)=>{
//    console.log("this is first res1")
//    // res.send("this first res1")
//    next()
// },(req,res,next)=>{
//    console.log("this second res")
//    // res.send("this is second res")
//    next()
// },(req,res,next)=>{
//    res.send("this 3ed res")
// })
const {AmintAuth,UserAuth}=require("./midillerware/Auth")
app.use("/admin",AmintAuth)
app.use("/user",UserAuth)
app.get("/user/getname",(req,res)=>{
   res.send("this user deatils")
})
app.get("/admin/user",(req,res)=>{
   res.send("this admin page")
})
app.get("/admin/deleted",(req,res)=>{
   res.send("user will bw deleted")
})

 

 app.listen(3000,()=>{
    console.log("the server is runing ")
 })