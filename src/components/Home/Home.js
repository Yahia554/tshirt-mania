import React, { useState } from "react";
import useTSharts from "../../hooks/useTSharts";
import Cart from "../Cart/Cart";
import Shart from "../Shart/Shart";
import "./Home.css";

const Home = () => {
  const [tSharts, setTSharts] = useTSharts();
  const [cart, setCart] = useState([]);

  const handleAddCart = (selectItem) => {
    const exist = cart.find((TShart) => TShart._id === selectItem._id);
    if (!exist) {
      const newCart = [...cart, selectItem];
      setCart(newCart);
    } else {
      alert("Item already added!!");
    }
  };

  const handleRemoveCart = (selectItem) => {
    const rest = cart.filter((shirt) => shirt._id !== selectItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tSharts.map((TShart) => (
          <Shart
            key={TShart._id}
            TShart={TShart}
            handleAddCart={handleAddCart}
          ></Shart>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
