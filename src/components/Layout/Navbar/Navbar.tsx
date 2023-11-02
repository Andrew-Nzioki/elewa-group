import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center p-16">
      <div className="flex items-center justify-between px-28 py-8 ">
        <h1>elewa-group</h1>
        <ul className="flex gap-4 p-4  h-16 bg-transparent">
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
      <hr className="border-b-2 border-[#FFFFFF] w-full bg-transparent " />
    </div>
  );
};

export default Navbar;
