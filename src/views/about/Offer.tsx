import React from "react";

// a component for what elewa offers

/**
 * @typedef {Object} OfferProps - Properties for the Offer component.
 * @property {string} imageUrl - The URL of the image for the offer.
 * @property {string} altText - The alternate text for the image.
 * @property {string} title - The title of the offer.
 * @property {string} description - The description of the offer.
 */

/**
 * Component displaying information about an offer provided by Elewa.
 * @param {OfferProps} props - The properties for the Offer component.
 * @returns {JSX.Element} Offer component UI.
 */
interface OfferProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

const Offer: React.FC<OfferProps> = ({
  imageUrl,
  altText,
  title,
  description,
}) => {
  return (
    <li className="flex flex-col items-start justify-start gap-2">
      <img src={imageUrl} alt={altText} />
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
};

export default Offer;
