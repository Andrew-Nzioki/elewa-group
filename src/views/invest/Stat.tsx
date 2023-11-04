import React from 'react';

interface StatProps {
  value: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ value, description }) => {
  return (
    <li className="border-gray-200 shadow-md rounded-md w-[265px] h-[200px] flex flex-col justify-center items-center p-8">
      <h1 className="font-semibold">{value}</h1>
      <p>{description}</p>
    </li>
  );
};

export default Stat;
