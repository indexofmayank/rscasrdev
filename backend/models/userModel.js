const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [30, "Name connot exceed 30 character"],
        minLength: [4, "Name should have more than 4 charcters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});