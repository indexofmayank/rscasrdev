const express = require("express");

const {
    postCar
} = require("../controllers/cars-controllers");

const router = express.Router();

router
    .route("/postcar")
    .post(postCar);


module.exports = router;