import { NavLink } from "react-router-dom";
import NavBarCss from "./css/NavBar.module.css";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <div className={`${NavBarCss.header}`}>
        <h2>WELCOME</h2>
        <p>DragonStore</p>
      </div>

      <ul className={`${NavBarCss.ul}`}>
        <li className={`${NavBarCss.li}`}>
          <NavLink to="/" className={`${NavBarCss.active}`}>
            Home
          </NavLink>
        </li>
        <li className={`${NavBarCss.li}`}>
          <NavLink to="/category/characters" className={`${NavBarCss.active}`}>
            Characters
          </NavLink>
        </li>
        <li className={`${NavBarCss.li}`}>
          <NavLink to="/category/planets" className={`${NavBarCss.active}`}>
            Planets
          </NavLink>
        </li>
        <div className={`${NavBarCss.cartwidgetContainer}`}>
        <li className={`${NavBarCss.li}`}>
          <NavLink to="/cart" className={`${NavBarCss.active}`}>
            <CartWidget />
          </NavLink>
        </li>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
