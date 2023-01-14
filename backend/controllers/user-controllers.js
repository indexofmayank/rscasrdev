const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils//jwtToken");
const ErrorHander = require("../utils/errorhander");

//Register a User
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const {name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "my-sample-id",
            url: "my-sample-url",
        },
    });

   res.status(201).json({
    success: true,
    user
   });

   sendToken(user, 201, res);
});


//Login User
exports.loginUser = catchAsyncErrors( async (req, res, next ) => {
    const {email, password} = req.body;

    //checking if user has given email and password or not
    if(!email || !password){
        return next (new ErrorHander("Please enter email or password", 400));
    }

    const user = await User.findOne({email}).select("+password");
    if(!user) {
        return next (new ErrorHander("Invalid email or password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next (new ErrorHander("Invalid email or password", 401));
    }
    sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors( async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});


// Get User Detail
exports.getUserDetails = catchAsyncErrors( async (req, res, next ) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});