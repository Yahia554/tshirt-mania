import React from "react";
import "./Shart.css";

const Shart = ({ handleAddCart, TShart }) => {
  const { name, picture, price } = TShart;
  return (
    <div className="shirt">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddCart(TShart)}>Add to Cart</button>
    </div>
  );
};

export default Shart;
