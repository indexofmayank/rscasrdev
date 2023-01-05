const Car = require("../models/car");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// Create Car
exports.postCar = catchAsyncErrors(async(req, res, next) => {

    const car = await Car.create(req.body);

    res.status(201).json({
        success: true,
        car
    });

});