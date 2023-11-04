import React from 'react';

interface CompanySectionReverseProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CompanySectionInverted: React.FC<CompanySectionReverseProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-row flex-grow gap-12">
     
      <div>
        <h1 className="pb-12 pt-12">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="min-w-[500px]">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default CompanySectionInverted;
