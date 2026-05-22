import { useState } from "react";
import API from "../services/api";

const AddEmployee = ({ fetchEmployees }) => {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    designation: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/employees", employee);

    fetchEmployees();

    alert("Employee Added");

    setEmployee({
      name: "",
      email: "",
      department: "",
      salary: "",
      designation: "",
    });
  };

  return (
    <div className="card p-4 mb-4">

      <h3>Add Employee</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-3"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          className="form-control mb-3"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          className="form-control mb-3"
          value={employee.salary}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          className="form-control mb-3"
          value={employee.designation}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Add Employee
        </button>

      </form>

    </div>
  );
};

export default AddEmployee;