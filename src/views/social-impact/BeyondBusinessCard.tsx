import React from 'react';

interface BeyondBusinessCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const BeyondBusinessCard: React.FC<BeyondBusinessCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-row flex-grow gap-12">
      <div className="min-w-[500px]">
        <img src={imageSrc} alt="team" />
      </div>
      <div>
        <h1 className="pb-12 pt-12">{title}</h1>
        <p>{description}</p>
        <button className="bg-slate-900 w-[200px] rounded-lg text-white">
          Join the waiting list
        </button>
      </div>
    </div>
  );
};

export default BeyondBusinessCard;
