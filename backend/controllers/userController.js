const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");

//Register a User
exports.registerUser=catchAsyncErrors( async(req,res,next)=>{

    const {name,email,password}=req.body;

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is sample id",
            url:"profilepicUrl"
        }
    });

    const token=user.getJWTToken();

    res.status(201).json({
        sucess:true,
        token,
    });
})