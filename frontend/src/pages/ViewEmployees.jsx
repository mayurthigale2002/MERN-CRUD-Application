import { useEffect, useState } from "react";
import API from "../services/api";
import AddEmployee from "./AddEmployee";

const ViewEmployees = () => {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const { data } = await API.get("/employees");

    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {

    await API.delete(`/employees/${id}`);

    fetchEmployees();
  };

  return (
    <div>

      <AddEmployee fetchEmployees={fetchEmployees} />

      <table className="table table-bordered">

        <thead className="table-dark">

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (
            <tr key={emp._id}>

              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.designation}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(emp._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ViewEmployees;