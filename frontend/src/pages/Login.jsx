import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      login(data);

      navigate("/dashboard");

    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">

      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit}>

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

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

        <p className="mt-3 text-center">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;