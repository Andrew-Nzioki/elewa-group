import React from 'react';

interface DifferentViewProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const DifferentView: React.FC<DifferentViewProps> = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      <div className="md:mr-8">
        <h1 className="text-4xl pb-4 font-medium">{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
};

export default DifferentView;
