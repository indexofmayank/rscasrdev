const ErrorHander = require("../utils/errorhander");
const CatchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");


// Register a User
exports.registerUser = CatchAsyncErrors(async(req, res, next) => {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "sample-id"
        }
    });

    res.status(201).json({
        success: true,
        user
    });

});