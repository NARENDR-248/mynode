const AmintAuth=(req,res,next)=>{
   const token="xyz"
   const aothrized=token==="xyz"
   aothrized?next():res.send("this admin not unaortharized")
}
const UserAuth=(req,res,next)=>{
   const token="yz"
   const aothrized=token==="xyz"
   aothrized?next():res.send("this user  not unaortharized")
}
module.exports={
    AmintAuth,
    UserAuth
}