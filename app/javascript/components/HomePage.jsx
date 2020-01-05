import React from 'react';
import Items from './Items.jsx';

const HomePage = ({items}) => {

  const handleOnClick = () => {
    window.location.href = "/users/sign_out"
  };

  return (
    <div>
      <div className="container">
        <div className="sign-out">
          <button onClick={handleOnClick}>sign out</button>
        </div>
        <header className="header">
          <h1>Shopping List</h1>
        </header>
      </div>
      <div>
        <Items items={items} />
      </div>
    </div>
  );
};

export default HomePage
