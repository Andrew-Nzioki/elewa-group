import React from 'react';

/**
 * Props for the Social Initiatives Card component.
 * @typedef {Object} SocialInitiativesCardProps
 * @property {string} imageSrc - The image source for the card.
 * @property {string} title - The title of the card.
 * @property {string} description - The description for the card.
 */

/**
 * Social Initiatives Card Component.
 * @param {SocialInitiativesCardProps} props - The props for the component.
 * @returns {JSX.Element} - Rendered component.
 */
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
