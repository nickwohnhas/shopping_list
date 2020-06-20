import React from 'react';
import Item from './Item.jsx';

const Items = ({ items }) => {
  return (
    <div className="user-list">
      {items.map(item => <Item key={item.id} name={item.name} />)}
    </div>
  );
};

export default Items;
