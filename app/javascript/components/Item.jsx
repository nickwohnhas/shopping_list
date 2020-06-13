import React from 'react';

const Item = ({name}) => {
  return (
    <div className="user-card">
      {name} Quantity: 0  <button className="btn">+</button><button className="btn">-</button>
    </div>
  );
};

export default Item;
