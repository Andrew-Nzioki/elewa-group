// The main about page view that uses other components to bring the final picture
import React from "react";
import Header from "../../components/Layout/Header/Header";
import Navbar from "../../components/Layout/Navbar/Navbar";
import ContentCard from "../../components/Shared/Containers/Content";
import "./about.css";
import Footer from "../../components/Layout/Footer/Footer";
import TeamMember from "./TeamMember";
import CultureItem from "./CultureItem";
import Offer from "./Offer";
import HistoryItem from "./HistoryItem";

/**
 * Represents a management structure.
 * @typedef {Object} management
 * @property {number} id - The ID of the management structure.
 * @property {string} name - The name of the member.
 * @property {string} role - The role of the member.
 * @property {string} linkedin - The LinkedIn URL of the member.
 */

/**
 * Represents a team structure.
 * @typedef {Object} team
 * @property {number} id - The ID of the team member.
 */

/**
 * Represents a history item.
 * @typedef {Object} history
 * @property {number} id - The ID of the history item.
 * @property {string} year - The year of the historical event.
 * @property {string} event - The event of the history item.
 * @property {string} description - The description of the history item.
 */

/**
 * Represents a culture item.
 * @typedef {Object} culture
 * @property {number} id - The ID of the culture item.
 * @property {string} icon - The icon representing the culture item.
 * @property {string} title - The title of the culture item.
 * @property {string} value - The value of the culture item.
 */

/**
 * Props for the About component.
 * @typedef {Object} AboutProps
 * @property {management[]} management - The management details.
 * @property {culture[]} culture - The culture details.
 * @property {history[]} history - The history details.
 * @property {team[]} team - The team details.
 */

/**
 * The main About page view that uses other components to create the final picture.
 * @param {AboutProps} props - The props for the About component.
 * @returns {JSX.Element} The About page view.
 */

//interfaces to ensure type safety
interface management {
  id: number;
  name: string;
  role: string;
  linkedin: string;
}
interface team {
  id: number;
}
interface history {
  id: number;
  year: string;
  event: string;
  description: string;
}
interface culture {
  id: number;
  icon: string;
  title: string;
  value: string;
}

interface AboutProps {
  management: management[];
  culture: culture[];
  history: history[];
  team: team[];
}

const About: React.FC<AboutProps> = ({
  management,
  culture,
  history,
  team,
}) => {
  return (
    <>
      <div className=" header-background-image text-white font-semibold shadow">
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
            <Offer
              imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png"
              altText="company"
              title="Holistic solutions"
              description="We go beyond a simple patch-up but develop lasting solutions through holistic design"
            />
            <Offer
              imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"
              altText="company"
              title="Another Title"
              description="Another description goes here"
            />
            <Offer
              imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png"
              altText="company"
              title="Different Title"
              description="Different description for this item"
            />
          </ul>
        </div>
      </ContentCard>
      <ContentCard className="bg-black text-white p-8">
        <div className="p-12">
          <button>Team</button>| <button>Management</button>
        </div>
        <ul className=" flex flex-row gap-4 p-6">
          <TeamMember
            imgSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg"
            altText="hr"
            name="Kennedy Adhola"
            position="Operations & Partnerships"
            linkedinUrl="https://www.linkedin.com/in/kennedy-adhola-97570535/"
          />
          <TeamMember
            imgSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg"
            altText="ceo"
            name="Jente Rosseel"
            position="Founder, Managing Partner"
            linkedinUrl="https://www.linkedin.com/in/jrosseel/"
          />
          <TeamMember
            imgSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg"
            altText="ceo"
            name="Peter Rosseel"
            position="Executive Chairman"
            linkedinUrl="https://www.linkedin.com/in/peter-reinartz-1b4452ab/"
          />
        </ul>
      </ContentCard>

      <ContentCard>
        <div className="flex flex-col gap-4 justify-start items-start p-6">
          <h1 className="text-5xl font-medium">Our Culture & Values</h1>
          <p>
            Our culture, CODE-(T), defines us. It protects and guides us to
            success. It keeps our team and management accountable to itself, its
            objective, and our long-term mission.
          </p>
        </div>
        <ul className="flex flex-row">
          {culture.map((item) => (
            <CultureItem key={item.id} item={item} />
          ))}
        </ul>
      </ContentCard>

      <ContentCard className="p-28 mx-auto bg-[#ececec] rounded-b-lg">
        <div className=" flex flex-row flex-grow gap-12 pl-28">
          <div className="min-w-[500px] rounded-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d127636.9245107146!2d36.794227602448785!3d-1.3842936002067676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-1.4707856!2d36.9433582!4m5!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sMoringa%20School%2C%20Ngong%20Lane%2C%20Nairobi!3m2!1d-1.3004862!2d36.7846067!5e0!3m2!1en!2ske!4v1698995209533!5m2!1en!2ske"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
          </div>

          <div>
            <h1 className="pb-12 pt-12">How to get there</h1>
            <p>
              Based in the heart of Westlands, Nairobi, Kenya, we are easily
              accessible from all parts of the city.
            </p>
            <p>
              Not in town? Teams, Meets or Zoom are our second name. Book an
              appointment today via{" "}
              <a href="contact@elewa.ke">contact@elewa.ke!</a>
            </p>
            <div className="pt-12">
              <button className="bg-slate-900 w-[200px] rounded-2xl text-white p-2">
                Get directions
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-medium">Our history</h1>

          <ul>
            {history.map((item) => (
              <HistoryItem
                year={item.year}
                description={item.description}
                event={item.event}
              />
            ))}
          </ul>
        </div>
      </ContentCard>

      <Footer />
    </>
  );
};

export default About;
