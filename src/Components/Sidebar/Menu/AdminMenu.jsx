import React from 'react';
import { FaBoxes, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaPeopleCarryBox } from "react-icons/fa6";

const AdminMenu = () => {
    return (
        <div>
            <ul className="py-5">
        <li>
          <NavLink
            to="/dashboard/all-parcels"
            className={({ isActive }) =>
              `text-lg exo-font flex items-center gap-2 py-3 
                ${isActive ? "bg-gray-200 text-[#333]" : "hover:underline text-white"}`
            }
          >
            <FaBoxes className="text-xl ml-3" />
            All Parcels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              `text-lg exo-font flex items-center gap-2 py-3 
                ${isActive ? "bg-gray-200 text-[#333]" : "hover:underline text-white"}`
            }
          >
            <FaUsers className="text-xl ml-3" />
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-deliveryman"
            className={({ isActive }) =>
              `text-lg exo-font flex items-center gap-2 py-3 
                ${isActive ? "bg-gray-200 text-[#333]" : "hover:underline text-white"}`
            }
          >
            <FaPeopleCarryBox className="text-xl ml-3" />
            All Delivery Man
          </NavLink>
        </li>
      </ul>
        </div>
    );
};

export default AdminMenu;