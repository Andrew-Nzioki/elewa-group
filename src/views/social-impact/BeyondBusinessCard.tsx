import React from 'react';
/**
 * Props for the BeyondBusinessCard component.
 * @typedef {Object} BeyondBusinessCardProps
 * @property {string} imageSrc - The image source URL for the BeyondBusinessCard.
 * @property {string} title - The title of the BeyondBusinessCard.
 * @property {string} description - The description for the BeyondBusinessCard.
 */

/**
 * BeyondBusinessCard Component.
 * @param {BeyondBusinessCardProps} props - The props for the component.
 * @returns {JSX.Element} - Rendered component.
 */
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
