import React from 'react';

interface Item {
  id: number;
  icon: string;
  title: string;
  value: string;
}

const CultureItem = ({ item }: { item: Item }) => {
  return (
    <li>
      <img src={item.icon} alt="p" />
      <h2>{item.title}</h2>
      <p>{item.value}</p>
    </li>
  );
};

export default CultureItem;
