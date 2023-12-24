import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import CarCss from "./css/Car.module.css";
import { Checkout } from "./checkOut";

export const Car = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { incrementQuantity, decrementQuantity, onRemove, clear, items } =
    useContext(CartContext);
  const totalVenta = items.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.price,
    0
  );
  const totalItems = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  if (!items.length) {
    return (
      <>
        <h1>The Car is empty</h1>
      </>
    );
  }

  return (
    <div className={`${CarCss.body}`}>
      <div className={`${CarCss["Cart-Container"]}`}>
        <div className={`${CarCss.Header}`}>
          <h3 className={`${CarCss.Heading}`}>Shopping Cart</h3>
          <button onClick={clear} className={`${CarCss.Action}`}>
            Remove All
          </button>
        </div>
        {/* Conditionally render items or Checkout component based on showCheckout */}
        {showCheckout ? (
          <Checkout />
        ) : (
          items.map((item) => (

            <div key={item.id} className={`${CarCss["Cart-Items"]}`}>
              <div className={`${CarCss["image-box"]}`}>
                <img src={item.image} height={150} width={80} alt="" />
              </div>
              <div className={`${CarCss.about}`}>
                <h1 className={`${CarCss.title}`}>{item.name}</h1>
                <h3 className={`${CarCss.subtitle}`}>{item.categoryId}</h3>
                <img src="aaa" height={30} alt="" />
              </div>
              <div className={`${CarCss.counter}`}>
                <div
                  className={`${CarCss.btn}`}
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </div>
                <div className={`${CarCss.count}`}>{item.quantity}</div>
                <div
                  className={`${CarCss.btn}`}
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </div>
              </div>
              <div className={`${CarCss.prices}`}>
                <div className={`${CarCss.amount}`}>{totalVenta}</div>
                <div className={`${CarCss.remove}`}>
                  <u onClick={() => onRemove(item.id)}>Remove</u>
                </div>
              </div>
            </div>
          ))
        )}

        <hr />

        <div className={`${CarCss.checkout}`}>
          <div className={`${CarCss.total}`}>
            <div>
              <div className={`${CarCss.Subtotal}`}>Sub-Total</div>
              <div className={`${CarCss.items}`}>{totalItems} items</div>
            </div>
            <div className={`${CarCss["total-amount"]}`}>${totalVenta}</div>
          </div>
          {/* Button to show Checkout component */}
          {!showCheckout && (
            <button
              className={`${CarCss.button}`}
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
