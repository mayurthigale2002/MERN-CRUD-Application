import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await API.post("/auth/register", {
      name,
      email,
      password,
    });

    alert("Registration Successful");

    navigate("/");

  } catch (error) {

    console.log(error);

    console.log(error.response.data);

    alert(error.response.data.message);

  }
};

  return (
    <div className="container mt-5">

      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

        <h2 className="mb-4 text-center">Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            className="form-control mb-3"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <p className="mt-3 text-center">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>

    </div>
  );
};

export default Register;