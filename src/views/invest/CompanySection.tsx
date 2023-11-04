import React from 'react';

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
