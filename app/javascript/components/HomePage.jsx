import React from 'react';
import Fridge from './Fridge';
import NavOptions from './NavOptions';
import Items from './Items.jsx';
import ItemForm from './ItemForm.jsx';

const HomePage = () => {
  return (
    <div>
      <NavOptions />
      <Fridge />
    </div>
  );
};

export default HomePage;
