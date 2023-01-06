const express = require("express");

const app = express();

app.use(express.json());

// Route Imports
const product = require("./routes/productRoute");
const carsRoutes = require('./routes/cars-routes');
const usersRoutes = require("./routes/users-routes");

app.use("/api/v1", product);
app.use("/api/v1", carsRoutes);
app.use("/api/v1", usersRoutes);

module.exports = app;