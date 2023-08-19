import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
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
        <button>корзина</button>
        <div>
          <p>С 10 до 20, ежедневно</p>
          <Link>8 812 450-25-25</Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
