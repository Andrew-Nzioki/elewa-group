import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-row flex-grow gap-12">
      <div>
        <h1 className="pb-12 pt-12">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="min-w-[500px]">
        <img className="rounded-xl" src={imageSrc} alt="team" />
      </div>
    </div>
  );
};

export default InfoCard;
