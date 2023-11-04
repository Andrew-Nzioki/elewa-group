import React from "react";
import AddressComponent from "./AddressComponent";
import SocialComponent from "./SocialComponent";
const Footer = () => {
  return (
    <div className="bg-black text-white h-[600px] rounded-t-lg pb-8 p-6 flex justify-between flex-col">
      <ul className="pt-8 flex flex-row justify-between items-center">
        <li>
          <h1>Headquarters</h1>
          <h4>The Promenade, 19 General</h4>
          <h4>Mathenge Rd</h4>
          <h4>Nairobi, Kenya</h4>
        </li>
        <li>
          <h1>Headquarters</h1>
          <h4>The Promenade, 19 General</h4>
          <h4>Mathenge Rd</h4>
          <h4>Nairobi, Kenya</h4>
        </li>
        <li>
          <h1>Headquarters</h1>
          <h4>The Promenade, 19 General</h4>
          <h4>Mathenge Rd</h4>
          <h4>Nairobi, Kenya</h4>
        </li>
        <li>
          <h1>Headquarters</h1>
          <h4>The Promenade, 19 General</h4>
          <h4>Mathenge Rd</h4>
          <h4>Nairobi, Kenya</h4>
        </li>
      </ul>

      <ul className="flex justify-between items-center ">
        <li>Icon</li>

        <li>
          <div>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Linkedin</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
