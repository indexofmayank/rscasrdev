const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product name"],
        trim: true
    },
    model: {
        type: String,
        required: [true, "Please enter car model"],
        trim: true
    },
    carType: {
        type: String,
        required: [true, "Please Enter car type"],
        trim: true
    },
    seats: {
        type: Number,
        required: [true, "Please Enter total seats"],
        trim: true
    },
    gears: {
        type: String,
        required: [true, "Please enter a gears "],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
        trim: true
    },
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
      Stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
      reviews: [
        {
          user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
    
      user: {
        type: String, //mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    
});

module.exports = mongoose.model("Car", carSchema);