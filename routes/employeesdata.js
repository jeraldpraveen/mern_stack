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
// @description   Get All Employees Data
// @access      Public
router.get("/", async (req, res) => {
  const findData = await Employees.find();
  res.json(findData);
});

// @route      PUT employeesdata/update
// @description   Update Employee Data
// @access      Public
router.put("/update", async (req, res) => {
  console.log(req.body);
  const { Name, Age, City, _id } = req.body;

  // Build employeeDetails object
  const employeeDetails = {};
  if (Name) employeeDetails.Name = Name;
  if (Age) employeeDetails.Age = Age;
  if (City) employeeDetails.City = City;

  try {
    let employee = await Employees.findById(_id);

    if (!employee) return res.status(404).json({ msg: "Contact not found" });

    employee = await Employees.findByIdAndUpdate(
      _id,
      { $set: employeeDetails },
      { new: true }
    );

    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE employeesdata/delete
// @desc      Delete contact
// @access    Public
router.delete("/del/:id", async (req, res) => {
  try {
    let employee = await Employees.findById(req.params.id);

    if (!employee) return res.status(404).json({ msg: "Employee not found" });

    await Employees.findByIdAndRemove(req.params.id);

    res.json({ msg: "Employee removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
