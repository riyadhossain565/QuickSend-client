import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Left side: sidebar component */}
      <Sidebar />
      {/* Right side: Dashboard dynamic content */}
      <div className="flex-1 md:ml-72">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
