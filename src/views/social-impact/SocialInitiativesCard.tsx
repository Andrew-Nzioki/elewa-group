import React from 'react';

interface SocialInitiativesCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SocialInitiativesCard: React.FC<SocialInitiativesCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-row flex-grow gap-12">
      <div>
        <h1 className="pb-12 pt-12">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="min-w-[500px]">
        <img src={imageSrc} alt="team" />
      </div>
    </div>
  );
};

export default SocialInitiativesCard;
