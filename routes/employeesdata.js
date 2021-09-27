const express = require("express");
const router = express.Router();
const Employees = require("../modals/employeesSchema");
const { check, validationResult } = require("express-validator");

// @route      POST employeesdata
// @description   Register An Employee
// @access      Public
router.post(
  "/",
  [
    check("Name", "name is required").not().isEmpty(),
    check("Age", "Age is required").not().isEmpty(),
    check("City", "City is required").not().isEmpty(),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //   res.json("Register An Employee");
    try {
      const newEmployee = new Employees({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City,
      });

      const employeeInDB = await newEmployee.save();
      res.json(employeeInDB);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route      GET employeesdata
// @description   Register An Employee
// @access      Public
// router.get("/", (req, res) => {
//   res.json("Get Employee Data");
// });

module.exports = router;
