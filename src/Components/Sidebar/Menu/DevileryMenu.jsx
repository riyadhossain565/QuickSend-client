import React from "react";
import { NavLink } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const DevileryMenu = () => {
  return (
    <div>
      <ul className="py-5">
        <li>
          <NavLink
            to="/dashboard/my-delivery-list"
            className={({ isActive }) =>
              `text-lg exo-font flex items-center gap-2 py-3 
                ${
                  isActive
                    ? "bg-gray-200 text-[#333]"
                    : "hover:underline text-white"
                }`
            }
          >
            <FaClipboardList className="text-xl ml-3" />
            My Delivery List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-reviews"
            className={({ isActive }) =>
              `text-lg exo-font flex items-center gap-2 py-3 
                ${
                  isActive
                    ? "bg-gray-200 text-[#333]"
                    : "hover:underline text-white"
                }`
            }
          >
            <MdReviews className="text-xl ml-3" />
            My Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DevileryMenu;
