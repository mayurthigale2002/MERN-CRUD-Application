import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <Link className="navbar-brand" to="/dashboard">
        Employee CRUD
      </Link>

      {user && (
        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

    </nav>
  );
};

export default Navbar;