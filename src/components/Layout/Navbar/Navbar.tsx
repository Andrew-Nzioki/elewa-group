import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-28 text-lg text-[#FFFFFF] ">
      <div className="flex items-center justify-between">
        <h1>elewa-group</h1>
        <ul className="flex md:flex-row sm:flex-col gap-6  h-10 bg-transparent">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/social-impact">Social Impact</Link>
          </li>
          <li>
            <Link to="/">Invest</Link>
          </li>
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
