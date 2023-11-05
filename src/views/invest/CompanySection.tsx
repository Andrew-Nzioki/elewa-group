import React from 'react';

/**
 * @typedef {Object} CompanySectionProps
 * @property {string} imageSrc - The URL of the image.
 * @property {string} imageAlt - The alternative text for the image.
 * @property {string} title - The title of the CompanySection.
 * @property {string} description - The description of the CompanySection.
 * @property {string} buttonText - The text for the button.
 */

/**
 * CompanySection component displays information about a company.
 * @param {CompanySectionProps} props - The props for the CompanySection component.
 * @returns {JSX.Element} CompanySection component UI.
 */
interface CompanySectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
}

const CompanySection: React.FC<CompanySectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex flex-row flex-grow gap-12">
      <div className="min-w-[500px]">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div>
        <h1 className="pb-12 pt-12">{title}</h1>
        <p>{description}</p>
        <button className="bg-slate-900 w-[200px] rounded-lg text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CompanySection;
