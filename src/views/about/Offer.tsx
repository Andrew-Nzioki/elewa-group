import React from 'react';

interface OfferProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

const Offer: React.FC<OfferProps> = ({ imageUrl, altText, title, description }) => {
  return (
    <li className="flex flex-col items-start justify-start gap-2">
      <img src={imageUrl} alt={altText} />
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
};

export default Offer;
