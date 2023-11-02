import React from "react";

const Navbar = () => {
  return (
    <div className="p-28 text-lg text-[#FFFFFF]">
      <div className="flex items-center justify-between">
        <h1>elewa-group</h1>
        <ul className="flex gap-6  h-10 bg-transparent">
          <li>Home</li>
          <li>About us</li>
          <li>Social Impact</li>
          <li>Invest</li>
          <li>Venture labs</li>
          <li>Brands</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <hr className="w-full border-0 border-t border-gray-300" />
    </div>
  );
};

export default Navbar;
