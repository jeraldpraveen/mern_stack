const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const connectDB = require("./config/db");

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
