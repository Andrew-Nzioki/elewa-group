import React from "react";
import Header from "../../components/Layout/Header/Header";
import Navbar from "../../components/Layout/Navbar/Navbar";
import ContentCard from "../../components/UI/Containers/Content";
import "./Invest.css";
const InvestPage = () => {
  return (
    <>
      <div className="invest-background-image">
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
      <ContentCard className="flex flex-col p-16  justify-center gap-12">
        <div>
          <h1 className="text-4xl pb-4 font-medium">
            How we see it differently
          </h1>
          <p>
            The global South is rapidly catching up with the "developed" world.
            It's time for you to get to know the rapid development, innovation
            and drive going on in this part of the world (East-Africa, South
            Asia and beyond).
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            alt="mask group"
          />
        </div>
      </ContentCard>

      <ContentCard className="p-6">
        <h1 className="text-center text-xl font-semibold">Key Figures</h1>
        <ul className="p-8">
          <li className="border-gray-200 shadow-md rounded-md w-[265px] h-[200px] flex flex-col justify-center gap-0 items-center p-8">
            <h1 className="font-semibold">1.3M</h1>
            <p>
              Approx. number of Kenyan talents reaching the age of 18 in 2022
            </p>
          </li>
        </ul>
      </ContentCard>

      <ContentCard className="p-28 mx-auto">
        <div className=" flex flex-row flex-grow gap-12">
          <div className="min-w-[500px]">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
              alt="team"
            />
          </div>

          <div>
            <h1 className="pb-12 pt-12">
              Elewa NV, a multi-stakeholder cooperation
            </h1>
            <p>
              At the heart of Elewa lies the structure Elewa NV. Based in
              Brussels, Belgium, Elewa NV is a private holding company which
              controls the assets of all Elewa activities. Elewa NV is owned and
              controlled by Elewa's founder, a small community of investors
              which share in the vision of Elewa and Elewa employees based
              throughout the activities of the group.
            </p>
          </div>
        </div>
      </ContentCard>
      <ContentCard className="p-28 mx-auto">
        <div className=" flex flex-row flex-grow gap-12">
          <div>
            <h1 className="pb-12 pt-12">
              Elewa NV, a multi-stakeholder cooperation
            </h1>
            <p>
              At the heart of Elewa lies the structure Elewa NV. Based in
              Brussels, Belgium, Elewa NV is a private holding company which
              controls the assets of all Elewa activities. Elewa NV is owned and
              controlled by Elewa's founder, a small community of investors
              which share in the vision of Elewa and Elewa employees based
              throughout the activities of the group.
            </p>
          </div>
          <div className="min-w-[500px]">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
              alt="team"
            />
          </div>
        </div>
      </ContentCard>

      <ContentCard className="p-28 mx-auto">
        <div className=" flex flex-row flex-grow gap-12">
          <div className="min-w-[500px]">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
              alt="team"
            />
          </div>

          <div>
            <h1 className="pb-12 pt-12">
              Elewa NV, a multi-stakeholder cooperation
            </h1>
            <p>
              At the heart of Elewa lies the structure Elewa NV. Based in
              Brussels, Belgium, Elewa NV is a private holding company which
              controls the assets of all Elewa activities. Elewa NV is owned and
              controlled by Elewa's founder, a small community of investors
              which share in the vision of Elewa and Elewa employees based
              throughout the activities of the group.
            </p>
            <button className="bg-slate-900 w-[200px] rounded-lg text-white">
              Join the waiting list
            </button>
          </div>
        </div>
      </ContentCard>

      <ContentCard className="p-28 flex flex-row justify-center items-center">
        <p>Become part of our mission.<br/> And start investing</p>
      </ContentCard>
    </>
  );
};

export default InvestPage;
