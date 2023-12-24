import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import cartImage from "../assets/CartWidget.png";
import CartWidgetCss from "./css/CartWidget.module.css";
import { Car } from "./Car";
import { useContext } from "react";

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );
  return (
    <Link to="/car">
      <div className={`${CartWidgetCss.spantroly}`}>
        <img src={cartImage} alt="car" width={60} />
      </div>
      <span className={`${CartWidgetCss.spantrolyNumber}`}>{total}</span>
    </Link>
  );
};
