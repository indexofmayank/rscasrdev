const express = require("express");

const {
    registerUser,
    loginUser,
    getUserDetails,
    logout
} = require("../controllers/user-controllers");


const router = express.Router();

router
    .route("/register")
    .post(registerUser);

router
    .route("/login")
    .post(loginUser);

router
    .route("/logout")
    .get(logout);

router
    .route("/me")
    .get(getUserDetails);


module.exports = router;