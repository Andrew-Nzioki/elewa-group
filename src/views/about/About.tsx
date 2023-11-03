import React from "react";
import Header from "../../components/Layout/Header/Header";
import Navbar from "../../components/Layout/Navbar/Navbar";
import ContentCard from "../../components/UI/Containers/Content";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="header-background-image text-white font-semibold shadow">
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
          <h1 className="text-6xl pb-4 font-bold">We Care!</h1>
          <div className="flex flex-row justify-between items-center gap-8  w-full">
            <p className="h-full">
              Elewa is a mission-driven organization. We make use of our
              cooperative and shared culture to drive the needle for the
              development of people and environment. We care about our growth,
              but also care deeply about the context surrounding us.
            </p>
            <p className="h-full">
              Our investments are therefore not limited to internal ones, but
              contribute heavily to our community and environment. From training
              the next scout leaders on sustainable practices, to bridging the
              employment gap for junior software developers.
            </p>
          </div>
          <ul className="pt-6 flex flex-row gap-4">
            <li className="flex flex-col items-start justify-start gap-2">
              <img
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png"
                alt="company"
              />
              <h4>Holistic solutions</h4>
              <p>
                We go beyond a simple patch-up but develop lasting solutions
                through holistic design
              </p>
            </li>
            <li className="flex flex-col items-start justify-start gap-2">
              <img
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"
                alt="company"
              />
              <h4>Holistic solutions</h4>
              <p>
                We go beyond a simple patch-up but develop lasting solutions
                through holistic design
              </p>
            </li>
            <li className="flex flex-col items-start justify-start gap-2">
              <img
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png"
                alt="company"
              />
              <h4>Holistic solutions</h4>
              <p>
                We go beyond a simple patch-up but develop lasting solutions
                through holistic design
              </p>
            </li>
          </ul>
        </div>
      </ContentCard>
      <ContentCard className="bg-black text-white p-8">
        <div className="p-12">
          <button>Team</button>| <button>Management</button>
        </div>
        <ul className=" flex flex-row gap-4 p-6">
          <li className="rounded-lg">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg"
              alt="hr"
            />
            <h4>Kennedy Adhola</h4>
            <p>Operations & Partnerships</p>
            <a href="https://www.linkedin.com/in/kennedy-adhola-97570535/">in</a>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg"
              alt="ceo"
            />
            <h4>Jente Rosseel</h4>
            <p>Founder, Managing Partner</p>
            <a href="https://www.linkedin.com/in/jrosseel/">in</a>
          </li>

          <li>
            <div>
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg"
              alt="ceo"
            />
            </div>
            <h4>Peter Rosseel</h4>
            <p>Executive Chairman</p>
            <a href="https://www.linkedin.com/in/peter-reinartz-1b4452ab/">in</a>
          </li>
        </ul>
      </ContentCard>

      
      

      

  
    </>
  );
};

export default About;
