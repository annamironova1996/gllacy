import { NavLink, Link } from "react-router-dom";
import Cart from "./Cart";

const Menu = ({ cartProducts, products, handleRemoveFromCart }) => {
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

        <div>
          <p>С 10 до 20, ежедневно</p>
          <Link>8 812 450-25-25</Link>
        </div>

        <Cart
          cartProducts={cartProducts}
          products={products}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </nav>
    </header>
  );
};

export default Menu;
