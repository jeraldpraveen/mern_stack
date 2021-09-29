const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");

//Init Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ extended: false }));

//Define Routes
app.use("/employeesdata", require("./routes/employeesdata"));

//Bringing Up Screen in http://localhost:5000/
app.use("/", (req, res) => {
  res.json("Welcome to Node.js");
});

//Listen Port
app.listen(5000, () => {
  console.log("Server Started On 5000");
});

// Mongoose DB Connection
connectDB();
