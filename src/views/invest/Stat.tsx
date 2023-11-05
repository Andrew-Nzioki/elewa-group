import React from 'react';


/**
 * @typedef {object} StatProps - Props for the Stat component.
 * @property {number} count - The count to display.
 * @property {string} description - The description to display.
 */

/**
 * Stat component displays count and a description.
 * @param {StatProps} props - The props for the Stat component.
 * @returns {JSX.Element} React component.
 */
interface StatProps {
  count: number;
  description: string;
}

const Stat: React.FC<StatProps> = ({ count, description }) => {
  return (
    <li className="border-gray-200 shadow-md rounded-md w-[265px] h-[200px] flex flex-col justify-center items-center p-8">
      <h1 className="font-semibold">{count}</h1>
      <p>{description}</p>
    </li>
  );
};

export default Stat;
