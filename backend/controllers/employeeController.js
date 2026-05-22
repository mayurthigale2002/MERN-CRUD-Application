const Employee = require("../models/Employee");


// Get Employees
const getEmployees = async (req, res) => {
  const employees = await Employee.find();

  res.json(employees);
};


// Add Employee
const addEmployee = async (req, res) => {
  const { name, email, department, salary, designation } = req.body;

  const employee = await Employee.create({
    name,
    email,
    department,
    salary,
    designation,
  });

  res.status(201).json(employee);
};


// Update Employee
const updateEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    employee.name = req.body.name || employee.name;
    employee.email = req.body.email || employee.email;
    employee.department =
      req.body.department || employee.department;
    employee.salary = req.body.salary || employee.salary;
    employee.designation =
      req.body.designation || employee.designation;

    const updatedEmployee = await employee.save();

    res.json(updatedEmployee);
  } else {
    res.status(404).json({
      message: "Employee not found",
    });
  }
};


// Delete Employee
const deleteEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    await employee.deleteOne();

    res.json({
      message: "Employee deleted",
    });
  } else {
    res.status(404).json({
      message: "Employee not found",
    });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};