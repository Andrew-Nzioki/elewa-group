import React from "react";
import Header from "../../components/Layout/Header/Header";
import Navbar from "../../components/Layout/Navbar/Navbar";
import ContentCard from "../../components/Shared/Containers/Content";
import "./Invest.css";
import Footer from "../../components/Layout/Footer/Footer";
import CompanySection from "./CompanySection";
import CompanySectionInverted from "./CompanySectionInverted";
import Stat from "./Stat";
import DifferentView from "./DifferentView";

/**
 * @typedef {Object} figures
 * @property {number} id - The ID of the figure.
 * @property {number} count - The count related to the figure.
 * @property {string} description - The description of the figure.
 */

/**
 * @typedef {Object} InvestProps
 * @property {figures[]} figures - Array of figures.
 */

/**
 * Represents the InvestPage component.
 * @param {InvestProps} props - The properties for the InvestPage component.
 * @returns {JSX.Element} JSX element representing the InvestPage.
 */
interface figures {
  id: number;
  count: number;
  description: string;
}
interface InvestProps {
  figures: figures[];
}
const InvestPage: React.FC<InvestProps> = ({ figures }) => {
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
        <DifferentView
          title="How we see it differently"
          description="The global South is rapidly catching up with the 'developed' world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond)."
          imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
          imageAlt="mask group"
        />
      </ContentCard>

      <ContentCard className="p-6">
        <h1 className="text-center text-xl font-semibold">Key Figures</h1>
        <ul className="p-2 grid grid-cols-4 gap-2">
          {figures.map((item) => (
            <Stat
              key={item.id}
              count={item.count}
              description={item.description}
            />
          ))}
        </ul>
      </ContentCard>

      <ContentCard className="p-28 mx-auto">
        <CompanySectionInverted
          imageSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
          imageAlt="team"
          title="Elewa NV, a multi-stakeholder cooperation"
          description="At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities. Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
        />
      </ContentCard>
      <ContentCard className="p-28 mx-auto">
        <CompanySection
          title="Elewa NV, a multi-stakeholder cooperation"
          description="At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities. Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
          imageSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
          imageAlt="team"
          buttonText=""
        />
      </ContentCard>

      <ContentCard className="p-28 mx-auto">
        <CompanySection
          imageSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
          imageAlt="team"
          title="Elewa NV, a multi-stakeholder cooperation"
          description="At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities. Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
          buttonText="Join the waiting list"
        />
      </ContentCard>

      <ContentCard className="p-28 flex flex-row justify-center items-center">
        <p>
          Become part of our mission.
          <br /> And start investing
        </p>
      </ContentCard>
      <Footer />
    </>
  );
};

export default InvestPage;
