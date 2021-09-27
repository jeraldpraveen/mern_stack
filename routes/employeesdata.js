const express = require("express");
const router = express.Router();

// @route      POST employeesdata
// @description   Register An Employee
// @access      Public
router.post("/", (req, res) => {
  res.json("Register An Employee");
});

module.exports = router;
