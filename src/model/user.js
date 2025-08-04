const mongoose=require("mongoose")

const UserShema=new mongoose.Schema({
    Firstname:{
        type:String
        
    },
    LastName:{
        type:String
    },
    EmailId:{
        type:String
    },
    Password:{
        type:String
    },
    Age:{
        type:String
    },
    Gender:{
        typez:String
    }
})
module.exports=mongoose.model("User",UserShema)