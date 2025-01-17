import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <ul className="p-5">
        <li>
          <NavLink
            to="/dashboard/bookParcel"
            className="text-lg text-white exo-font "
          >
            Book A Parcel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/bookParcel"
            className="text-lg text-white exo-font "
          >
            My Parcels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/bookParcel"
            className="text-lg text-white exo-font "
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
