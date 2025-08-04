const express=require("express")
const app=express()
const conntectedDB=require("./configg/database")

const User=require("./model/user")

app.post("/signup", async (req, res) => {
  const user = new User({
    Firstname: "nani",
    LastName: "narendra",
    EmailId: "nani@gmail.com",
    Age: 21
  });

  try {
   const savedUser = await user.save();
  console.log("User saved:", savedUser);
  res.send("user is saved");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


conntectedDB().then(()=>{
   console.log("database is connected")
   app.listen(3000,()=>{
   console.log("the server is runing ")
 })
})
.catch((err)=>{
    console.log("db not conneacted something worng ")
})
