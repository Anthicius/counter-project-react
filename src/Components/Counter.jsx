import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);


  const textColor = count < 0 ? "red" : "black";

  const handleChange = (label) => {
    if (label === "Increment") {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <Button onChange={handleChange} label="Increment" />
      <Button onChange={handleChange} label="Decrement" />
      
      <p style={{ color: textColor }}>{count}</p>
    </>
  );
};

export default Counter;