import React from 'react';

interface HistoryItemProps {
  year: string;
  event: string;
  description: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ year, event, description }) => {
  return (
    <li>
      <h1>{year}</h1>
      <p>{event}</p>
      <p>{description}</p>
    </li>
  );
};

export default HistoryItem;
