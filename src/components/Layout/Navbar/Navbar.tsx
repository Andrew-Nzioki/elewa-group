/*
This is the navbar file that has code related to how the 
navbar behaves the texts inside the 
ClassName uses tailwind utility classes for styling
 for example items-center centers items using the flex box
*/
import React from "react";
import { Link } from "react-router-dom";
import CustomSVG from "../../Shared/Logo/CustomLogo";
const Navbar = () => {
  return (
    <div className="p-28 text-lg text-[#FFFFFF] ">
      <div className="flex items-center justify-between">
        <h1>
          <CustomSVG className="text-blue-500" />
        </h1>
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
