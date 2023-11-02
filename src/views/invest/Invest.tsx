import React from "react";
import Header from "../../components/Layout/Header/Header";
import ContentCard from "../../components/UI/Containers/Content";
import "./Invest.css";
const InvestPage = () => {
  return (
    <>
      <Header
        title="Trade, not aid"
        vision="Southern innovations addressing global problems"
        titleClassName="text-[#FFFFFF]"
        visionClassName="text-[#FFFFFF]"
        divClassName="divclass"
        className="w-screen bg-slate-400 h-[880px] header-background-image flex flex-col justify-center items-start p-10 gap-4"
      />
      <ContentCard className="h-[400px] w-[100%]">
        <h1>Content card</h1>
      </ContentCard>
    </>
  );
};

export default InvestPage;
