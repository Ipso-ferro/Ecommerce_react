import { useState } from "react";

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(initial);
  }

  return (
    <>
      <div onClick={handleDecreaseCount}>-</div>
      <input value={count} />
      <div onClick={handleIncreaseCount}>+</div>
      <button onClick={handleAdd}>Add to cart</button>
    </> 
  );
};
