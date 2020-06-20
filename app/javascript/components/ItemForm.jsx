import React from 'react';

const ItemForm = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="new-food-name">Name</label>
          <input type="text" className="form-control" id="new-food-name" aria-describedby="newFood" placeholder="Banana" />
        </div>
        <div className="form-group">
          <label htmlFor="new-quantity">Quantity</label>
          <input type="text" className="form-control" id="new-quantity" placeholder="2 lb" />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

export default ItemForm;
