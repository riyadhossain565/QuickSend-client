import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./Menu/UserMenu";
import DevileryMenu from "./Menu/DevileryMenu";
import AdminMenu from "./Menu/AdminMenu";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // sidebar handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small screen Navbar */}
      {/* todo */}

      {/* sidebar */}
      <div
        className={`z-10 md:fixed overflow-x-hidden bg-[#333] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform 
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
            <UserMenu />
            <DevileryMenu />
            <AdminMenu />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
