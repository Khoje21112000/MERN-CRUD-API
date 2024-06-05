const express=require("express");
const User=require('../models/login.model.js');
const router=express.Router();

const {registerUser,loginUser,updateUser,getUser}=require('../controllers/user.controller.js');

router.post("/",registerUser);
router.post("/",loginUser);
router.put("/:id",updateUser);
router.get("/",getUser);

module.exports=router;