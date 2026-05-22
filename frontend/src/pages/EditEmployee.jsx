import { useState } from "react";
import API from "../services/api";

const EditEmployee = ({ employee, fetchEmployees }) => {

  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {

    await API.put(`/employees/${employee._id}`, formData);

    fetchEmployees();

    alert("Employee Updated");
  };

  return (
    <>
      <input
        type="text"
        name="name"
        className="form-control mb-2"
        value={formData.name}
        onChange={handleChange}
      />

      <button
        className="btn btn-success btn-sm"
        onClick={handleUpdate}
      >
        Update
      </button>
    </>
  );
};

export default EditEmployee;