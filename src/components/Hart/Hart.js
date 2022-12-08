import React from "react";
import { useContext } from "react";
import { HartContext } from "../Grandpa/Grandpa";

const Hart = () => {
  const [house, setHouse] = useContext(HartContext);
  return (
    <div>
      <h5>love</h5>
      <p>gift: {house}</p>
      <button onClick={() => setHouse(house + 1)}>add bay a house</button>
    </div>
  );
};

export default Hart;
