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
        className="w-screen bg-slate-400 h-[880px] header-background-image"
      />
      <ContentCard className="h-[400px] w-screen">
        <h1>Content card</h1>
      </ContentCard>
    </>
  );
};

export default InvestPage;
