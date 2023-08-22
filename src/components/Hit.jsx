import React from "react";
import hit from "../icons/hit_icon.png";
import "./Hit.css";

const Hit = ({ item }) => {
  if (item.status === "hit")
    return (
      <article className="hit-item">
        <img
          src={hit}
          width="61px"
          height="61px"
          className="hit-item-icon"
        />
        <img
          src={item.img}
          className="hit-item-imag"
        />
        <div className="hit-item-price">
          {item.price}₽<span className="hit-item-weight">/кг</span>
        </div>
        <h3 className="hit-item-title">{item.title}</h3>
      </article>
    );
};

export default Hit;
