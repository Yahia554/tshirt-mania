import React from "react";
import { useContext } from "react";
import { HartContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [house, setHouse] = useContext(HartContext);
  return (
    <div>
      <h4>aunty</h4>
      <p>house: {house}</p>
      <button onClick={() => setHouse(house + 1)}> bay a house aunty </button>
    </div>
  );
};

export default Aunty;
