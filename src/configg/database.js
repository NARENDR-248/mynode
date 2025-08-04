const mongoose=require("mongoose")
const conntectedDB=async()=>{
    await mongoose.connect("mongodb+srv://kadivetinarendra158:prabha123@namastenode.0pd4q1p.mongodb.net/DevTinder")}

module.exports=
    conntectedDB


