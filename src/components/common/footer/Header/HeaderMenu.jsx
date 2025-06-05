import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const HeaderMenu = ({ label }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative cursor-pointer text-sm text-gray-600 font-medium"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        {label} <FaChevronDown className="text-xs" />
      </div>
      {open && (
        <div className="absolute top-full mt-2 bg-white shadow-md p-2 rounded w-40 z-10">
          <div className="hover:bg-gray-100 px-2 py-1 rounded">Product 1</div>
          <div className="hover:bg-gray-100 px-2 py-1 rounded">Product 2</div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
