import React from "react";

//interface for the elewa history section and a component for the same

/**
 * @typedef {Object} HistoryItemProps - Properties for the HistoryItem component.
 * @property {string} year - The year of the historical event.
 * @property {string} event - The title or name of the historical event.
 * @property {string} description - Description of the historical event.
 */

/**
 * Component displaying historical events in Elewa's history section.
 * @param {HistoryItemProps} props - The properties for the HistoryItem component.
 * @returns {JSX.Element} HistoryItem component UI.
 */
interface HistoryItemProps {
  year: string;
  event: string;
  description: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  year,
  event,
  description,
}) => {
  return (
    <li>
      <h1>{year}</h1>
      <p>{event}</p>
      <p>{description}</p>
    </li>
  );
};

export default HistoryItem;
