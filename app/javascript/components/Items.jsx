import React from 'react';
import Item from './Item.jsx';

const Items = ({items}) => {
  console.log(items)
  return (
    <div className="user-list">
      {items.map(item => <Item key={item.id} name={item.name}/>)}
    </div>
  );
};

export default Items;
