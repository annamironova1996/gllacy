import { Link, NavLink } from "react-router-dom";
import { BsCart2, BsBoxArrowInRight } from "react-icons/bs";
import { useState } from "react";
import Order from "./Order";
import logo from "../imag/logo_gllacy.png";
import "./Menu.css";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order
          key={el.id}
          item={el}
          onDelete={props.onDelete}
        />
      ))}
      <hr className="header-cart-hr" />
      <p className="header-cart-summa">
        Итого: {new Intl.NumberFormat().format(summa)} руб.
      </p>
      <button type="submit">Оформить заказ</button>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="header-cart-nothing">
      <h3>В корзине товаров нет</h3>
    </div>
  );
};

const Menu = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="header-wrapper">
          <ul className="header-navigation">
            <li>
              <NavLink
                className="header-link"
                to="."
                end
              >
                <img src={logo} />
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-link"
                to="/catalog"
              >
                Каталог
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-link"
                to="/delivery"
              >
                Доставка и оплата
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-link"
                to="/about"
              >
                О компании
              </NavLink>
            </li>
          </ul>

          <div className="header-buttons">
            <button
              type="button"
              className="header-button"
            >
              <BsBoxArrowInRight className="header-icon header-icon-enter" />
              Вход
            </button>
            <button
              type="button"
              className="header-button"
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
            >
              <BsCart2 className="header-icon header-icon-cart" />
            </button>
            {cartOpen && (
              <div className="header-cart">
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
          </div>
        </nav>

        <div className="header-info">
          <p>С 10 до 20, ежедневно</p>
          <Link className="header-info-link">8 812 450-25-25</Link>
        </div>
      </div>
    </header>
  );
};

export default Menu;
