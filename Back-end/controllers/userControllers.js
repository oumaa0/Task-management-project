    const User=require("../models/userModel")
    const bcrypt=require('bcrypt')
    const jwt=require('jsonwebtoken')
const GetDone=(req,res)=>{
    res.send("Routing")
}


const Register=async(req,res)=>{

try {
    const {name,email,password}=req.body
    const existEmail=await User.findOne({email:email})
    if(existEmail){
res.status(400).json({msg:"Email already exist,Pls make sure to login"})
    }
else{
const HashPW=await bcrypt.hash(password,10)
console.log(HashPW)
    const myuser=await User.create({email,password:HashPW})
    const token=await jwt.sign({id:myuser._id},process.env.JWT_KEY,{expiresIn:"7D"})
res.status(201).json({msg:"Register done",token})
}


} catch (error) {
    res.status(500).json({msg:"somthing went wrong",error})
}

}









const login=async(req,res)=>{

try {
const {email,password}=req.body
const existUser=await User.findOne({email:email})
if(!existUser){
res.status(400).json({msg:"Make sure to Register first!"})
}
else{
const VerifyPassword=await bcrypt.compare(password,existUser.password)
if(!VerifyPassword){
res.status(400).json({msg:"password wrong pls try again"})    
}   
else{
    const token=await jwt.sign({id:existUser._id},process.env.JWT_KEY,{expiresIn:"7D"})
    res.status(201).json({msg:"Login done",token})
    }
}




} catch (error) {
res.status(500).json({msg:"somthing went wrong",error})
}

}

const getUserData=async(req,res)=>{
    try {
        const userData=await User.findOne({_id:req.body.userId})
        res.status(200).json({msg:"Get all user data",userData})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error})
    }
}



module.exports={GetDone,Register,login,getUserData}


