import { NavLink } from "react-router-dom";
import "./Stock.css";

const Stock = ({ stock }) => {
  return (
    <article className="stock">
      <img
        className="stock-img"
        src={stock.img}
      />
      <h3>{stock.title}</h3>
      <p>{stock.description}</p>
      <button>
        <NavLink
          className="stock-link"
          to="catalog"
          path="relative"
        >
          {stock.text}
        </NavLink>
      </button>
    </article>
  );
};

export default Stock;
