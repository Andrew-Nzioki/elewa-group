import React from 'react';
// this is the culture component reused in about page it's task is one to display icon,title and information about elewa culture


/**
 * Represents an item in the Culture Component.
 * @typedef {Object} Item
 * @property {number} id - The ID of the culture item.
 * @property {string} icon - The icon representing the culture item.
 * @property {string} title - The title of the culture item.
 * @property {string} value - The information or value of the culture item.
 */

/**
 * Component to display an individual culture item.
 * @param {Object} props - The props for the CultureItem component.
 * @param {Item} props.item - The culture item details.
 * @returns {JSX.Element} A list item displaying culture item information.
 */
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
