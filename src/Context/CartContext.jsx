import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const onRemove = (id) => {
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
    console.log(filterItems);
  };

  const onAdd = (item, quantity) => {
    const exists = items.some((i) => i.id === item.id);
    if (exists) {
      const updateItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + quantity };
        } else {
          return i;
        }
      });
      setItems(updateItems);
    } else {
      setItems((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const incrementQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
  };

  console.log(items);

  return (
    <CartContext.Provider
      value={{
        items,
        clear,
        onAdd,
        onRemove,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
