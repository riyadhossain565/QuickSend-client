import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddHome } from "react-icons/md";
import { FaShoppingBag, FaUser } from "react-icons/fa";


const UserMenu = () => {
  return (
    <div>
      <ul className="py-5">
        <li>
          <NavLink
            to="/dashboard/book-parcel"
            className={({isActive}) => 
                `text-lg text-white exo-font flex items-center gap-2 py-3 
                ${isActive ? 'bg-gray-200 text-black' : 'hover:underline'}`
            }
          >
            <MdAddHome className="text-xl ml-3" />
            Book A Parcel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-parcels"
            className={({isActive}) => 
                `text-lg text-white exo-font flex items-center gap-2 py-3 
                ${isActive ? 'bg-gray-200 text-black' : 'hover:underline'}`
            }
          >
            <FaShoppingBag className="text-xl ml-3" />
            My Parcels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-profile"
            className={({isActive}) => 
                `text-lg text-white exo-font flex items-center gap-2 py-3 
                ${isActive ? 'bg-gray-200 text-black' : 'hover:underline'}`
            }
          >
            <FaUser className="text-xl ml-3" />
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
