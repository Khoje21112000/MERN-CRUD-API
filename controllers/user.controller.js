
const { request, response } = require("express");
const User = require("../models/login.model");
const { use } = require("../routes/product.route");


//user registration successfully
const registerUser = async (request, response) => {
  try {
    const user=await User.create(request.body);
    response.status(200).json({message:"registeration successfully..!"});
  } 
  catch (error) {
    response.status(500).json({ message: error.message });
  }
};

//get all user

const getUser=async(request,response)=>{
    try{
        const user=await User.find({});
        response.status(200).json(user);

    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}

//user login 
const loginUser=async (request,response)=>{
    try{
        const user=await User.create(request.body);
        response.status(200).json({message:"login successfully..!"});

    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}

//update user 

const updateUser=async (request,response)=>{
    try{
        const {id}=request.params;
        const user=await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return response.status(404).json({message:"user not find"});
        }
        const updateUser=await User.findById(id);
        response.status(200).json(updateUser);
        
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}


module.exports = {
  registerUser,
  loginUser,
  updateUser,
  getUser

};
