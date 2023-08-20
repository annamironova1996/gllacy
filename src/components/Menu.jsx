import { NavLink, Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";

const Menu = () => {
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
        <BsCart3 />

        <div>
          <p>С 10 до 20, ежедневно</p>
          <Link>8 812 450-25-25</Link>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
