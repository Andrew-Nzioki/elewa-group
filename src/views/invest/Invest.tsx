import React from "react";
import Header from "../../components/Layout/Header/Header";
import Navbar from "../../components/Layout/Navbar/Navbar";
import ContentCard from "../../components/UI/Containers/Content";
import "./Invest.css";
const InvestPage = () => {
  return (
    <div className="header-background-image">
      <Navbar />
      <Header
        title="Trade, not aid"
        vision="Southern innovations addressing global problems"
        titleClassName="text-[#FFFFFF]"
        visionClassName="text-[#FFFFFF] text-5xl font-medium"
        divClassName="divclass"
        className="w-screen h-[880px]  flex flex-col justify-center items-start p-10 gap-4"
      ></Header>
  
    </div>
  );
};

export default InvestPage;
