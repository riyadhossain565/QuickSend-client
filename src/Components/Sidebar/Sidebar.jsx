import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./Menu/UserMenu";
import DevileryMenu from "./Menu/DevileryMenu";
import AdminMenu from "./Menu/AdminMenu";
import { AiOutlineBars } from "react-icons/ai";
import useUserRole from "@/src/Hooks/useUserRole/useUserRole";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const [userRole] = useUserRole();

  const {role} = userRole || {}
  // console.log(userRole);

  // sidebar handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">QuickSend</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`z-10 md:fixed overflow-x-hidden bg-[#333] w-64 space-y-6  py-4 absolute inset-y-0 left-0 transform 
      ${
        isActive && "-translate-x-full"
      }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        {/* title and logo */}
        <div className="text-3xl cinzel-font font-bold pl-4 pt-14 text-white">
          <Link to="/">QuickSend</Link>
        </div>

        {/* Nav Items */}
        <div>
          <nav>
            {/* menu items */}

            {role === "user" && <UserMenu />}
            {role === "deliveryMan" && <DevileryMenu />}
            {role === "admin" && <AdminMenu />}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
