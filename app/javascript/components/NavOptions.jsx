import React from 'react';

const NavOptions = () => {
  return (
    <div className="row align-items-baseline">
      <h1 id="header-text" className="col-md-3 offset-md-3">Fridge</h1>
      <div id="new-shelf" className="col-md-3 offset-md-3">
        <button className="btn btn-primary" id="new-shelf">New Shelf</button>
      </div>
    </div>
  )
}

export default NavOptions;