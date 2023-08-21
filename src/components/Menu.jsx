import { Link, NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import Order from "./Order";

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
      <p>Сумма: {new Intl.NumberFormat().format(summa)} </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div>
      <h3>Товаров нет!</h3>
    </div>
  );
};

const Menu = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <nav>
        <NavLink
          to="."
          end
        >
          Главная
        </NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/delivery">Доставка и оплата</NavLink>
        <NavLink to="/about">О компании</NavLink>
        <button>вход</button>

        <button>
          <BsCart2 onClick={() => setCartOpen((cartOpen = !cartOpen))} />
        </button>
        {cartOpen && (
          <div>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
        <div>
          <p>С 10 до 20, ежедневно</p>
          <Link>8 812 450-25-25</Link>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
