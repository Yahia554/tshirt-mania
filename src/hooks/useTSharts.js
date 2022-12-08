import { useEffect, useState } from "react";

const useTSharts = () => {
  const [tSharts, setTSharts] = useState([]);

  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTSharts(data));
  }, []);

  return [tSharts, setTSharts];
};

export default useTSharts;
