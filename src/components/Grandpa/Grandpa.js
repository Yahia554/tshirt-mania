import React from "react";
import { useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncel from "../Uncel/Uncel";
import "./Grandpa.css";

export const HartContext = React.createContext("Dim");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const handleABayHouse = () => {
    const newHoseCount = house + 1;
    setHouse(newHoseCount);
  };
  return (
    <HartContext.Provider value={[house, setHouse]}>
      <div className="grand-pa">
        <h4>Grand pa</h4>

        <p>
          house: {house} <button onClick={handleABayHouse}>as a house</button>
        </p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncel house={house}></Uncel>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </HartContext.Provider>
  );
};

export default Grandpa;
