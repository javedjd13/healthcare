// import { Link } from "react-router-dom";

// const NavLinkItem = ({ to, label, className = "" }) => (
//   <Link
//     to={to}
//     className={`text-gray-700 hover:text-blue-600 font-medium transition ${className}`}
//   >
//     {label}
//   </Link>
// );

// export default NavLinkItem;
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ label, path, active }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-sm text-gray-600 font-medium relative ${
          isActive || active ? "text-blue-600 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
