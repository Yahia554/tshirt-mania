import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
  let commad;
  if (cart.length === 0) {
    commad = <p>Please add list one item</p>;
  } else if (cart.length === 1) {
    commad = <p>please add more item...</p>;
  } else {
    commad = <p>thanks for add</p>;
  }

  return (
    <div>
      <h3>Add cart: {cart.length}</h3>
      {cart.map((shirt) => (
        <p>
          {shirt.name}
          <button onClick={() => handleRemoveCart(shirt)}>X</button>
        </p>
      ))}
      {/* conditional rendering*/}
      {cart.length === 3 && (
        <div className="blue">
          <h3>gift bonus</h3>
          <p>one item</p>
        </div>
      )}
      {cart.length === 0 || <p className="blue">yay eii</p>}
      {commad}
      {cart.length !== 4 ? <p>keep add</p> : <button>remove all</button>}
      {cart.length === 4 && <button className="blue">Review</button>}
    </div>
  );
};

export default Cart;
