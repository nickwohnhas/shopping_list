import React from 'react';
import Items from './Items.jsx';
import ItemForm from './ItemForm.jsx';

const HomePage = ({ items }) => {
  const handleOnClick = () => {
    window.location.href = '/users/sign_out';
  };

  return (
    <div>
      <section>
        <ItemForm />
        <Items items={items} />
      </section>
    </div>
  );
};

export default HomePage;
