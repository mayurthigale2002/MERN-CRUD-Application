import Navbar from "../components/Navbar";
import ViewEmployees from "./ViewEmployees";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <ViewEmployees />
      </div>
    </>
  );
};

export default Dashboard;