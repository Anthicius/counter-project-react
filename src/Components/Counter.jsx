import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color,setColor] = useState(true)

  const handleChange = (label) => {
    console.log(label)
    if (label === "Increment") {
      setCount((prevCount) => prevCount + 1);
    } else setCount((prevCount) => prevCount - 1);
    if(count<0){
      setColor(false)
    } else setColor(true)
  };

  return (
    <>
      <Button onChange={handleChange} label="Increment" />
      <Button onChange={handleChange} label="Decrement" />
      <p style={{color: color?"black":"red "}}>{count}</p>
    </>
  );
};

export default Counter;
