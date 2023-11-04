import React from "react";
import Header from "../../components/Layout/Header/Header";
import Navbar from "../../components/Layout/Navbar/Navbar";
import ContentCard from "../../components/UI/Containers/Content";
import "./socialImpact.css";
import Footer from "../../components/Layout/Footer/Footer";

interface company {
  id: number;
  image: string;

}
interface stats{
  id:number,
  count:number,
  description:string,
}
interface SocialImpactProps {
  companies: company[]; 
  stats:stats[],
}

const SocialImpact: React.FC<SocialImpactProps> = ({ companies,stats }) => {
  return (
    <>
      <div className="social-background-image">
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

      <ContentCard className="p-28 mx-auto bg-black text-white">
        <ul className="p-8 font-medium text-2xl text-white flex flex-row gap-2 justify-between items-center">
         {stats.map(item=> <li key={item.id}>
          <h1>Item</h1>
            <h4>{item.count}</h4>
            <p>{item.description}</p>
          </li>)}
        </ul>
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
      <ContentCard className="p-28 mx-auto bg-[#ECECEC]">
        <div className=" flex flex-row flex-grow gap-12">
          <div>
            <h1 className="pb-12 pt-12">A cooperative mindset</h1>
            <p>
              Elewa has one shared objective; To unlock the true potential of
              individuals, teams, and the community. We believe strongly in the
              power of sharing ideas and continuously strive to grow each other
              and ourselves. Internally, but also within the larger communities
              in which we are active.
            </p>
          </div>
          <div className="min-w-[500px]">
            <img
              className="rounded-xl"
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
              alt="team"
            />
          </div>
        </div>
      </ContentCard>

      <ContentCard className="p-28 mx-auto bg-[#FFFFFF] rounded-b-lg">
        <div className=" flex flex-row flex-grow gap-12">
          <div className="min-w-[500px]">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
              alt="team"
            />
          </div>

          <div>
            <h1 className="pb-12 pt-12">Beyond business</h1>
            <p>
              We channel a good amount of our resources into giving back.
              Through projects such as our coding school in Kakuma refugee camp,
              training teachers in pastoral Samburu and our open-source coding
              initiatives providing entry-level opportunities to hundreds of
              junior engineers These projects don't necessarily have an
              immediate financial return, but their impact can be tangibly
              measured in the long-term.
            </p>
            <button className="bg-slate-900 w-[200px] rounded-lg text-white">
              Join the waiting list
            </button>
          </div>
        </div>
      </ContentCard>

      <ContentCard className="p-28 mx-auto bg-black text-white rounded-b-lg">
        <div className=" flex flex-row flex-grow gap-12">
          <div>
            <h1 className="pb-12 pt-12">Beyond business</h1>
            <p>
              We channel a good amount of our resources into giving back.
              Through projects such as our coding school in Kakuma refugee camp,
              training teachers in pastoral Samburu and our open-source coding
              initiatives providing entry-level opportunities to hundreds of
              junior engineers These projects don't necessarily have an
              immediate financial return, but their impact can be tangibly
              measured in the long-term.
            </p>
          </div>
          <div className="min-w-[500px]">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
              alt="team"
            />
          </div>
        </div>
      </ContentCard>

      <ContentCard className="pt-12 pb-16 flex flex-col gap-12">
        <div className="flex justify-center items-center text-xl">
          <h1 className="font-semibold">Some of our impact projects</h1>
        </div>
        <ul className="flex justify-start  gap-4">
          {companies.map((item) => (
            <li className="h-[50px] w-[200px]">
              <img src={`${item.image}`} alt="companies" />
            </li>
          ))}
          
        </ul>

        <div className="flex justify-center items-center">
          <h1>Become part of our mission and join elewa.</h1>
        </div>
      </ContentCard>

      <Footer />
    </>
  );
};

export default SocialImpact;
