const mongoose = require("mongoose");

const employeesSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("employees", employeesSchema);
