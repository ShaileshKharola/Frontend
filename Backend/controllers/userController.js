import validator from "validator";
import userModel from "../models/userModel.js";
import bycript from "bcryptjs";
import jwt from "jsonwebtoken";
const createToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,)
}
//route for user login
const loginUser= async (req, res) => {
  try{
    const{email,password}=req.body;
    //check user exists 
    const user=await userModel.findOne({email})
    if(!user){
      return res.json({success:false, message:"User does not exist"});
    }
    const isMatch=await bycript.compare(password,user.password)
    if(isMatch){
      const token=createToken(user._id)
      res.json({success:true, token})
    }else{
      res.json({success:false, message:"Invalid credentials"})
    }
  }catch(error){
    console.log(error)
    res.json({success:false, message:error.message})

  }
}
//route for user register
const registerUser= async (req, res) => {
  try{
    const{name,email,password}=req.body;
    //check user already exists
    const exist=await userModel.findOne({email})
    if(exist){
      return res.json({success:false, message:"User already exists"});
    }//validate user and strong password
    if(!validator.isEmail(email)){
      return res.json({success:false, message:"Please enter a valid email"});
    }
    if(password.length<8){
      return res.json({success:false, message:"Please enter a strong password"});
    }
    //hash password
    const salt=await bycript.genSalt(10)
    const hashedPassword=await bycript.hash(password,salt);
    const newUser=new userModel({
      name,
      email,
      password:hashedPassword
    })
    const user=await newUser.save()
    const token =createToken(user._id)
    res.json({success:true,token})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}  
//route for admin login
const adminLogin = async (req, res) => {
  // Implement admin login logic here
}
export { loginUser, registerUser, adminLogin };