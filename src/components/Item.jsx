import React, { Component } from "react";
import "./Item.css";

export class Item extends Component {
  render() {
    return (
      <article className="catalog-item">
        <img
          className="catalog-item-img"
          src={"./" + this.props.item.img}
        />
        <h3
          onClick={() => this.props.onShowItem(this.props.item)}
          className="catalog-item-title"
        >
          {this.props.item.title}
        </h3>
        <div className="catalog-item-price">
          {this.props.item.price}₽
          <span className="catalog-item-weight">/кг</span>
        </div>

        <button
          className="catalog-item-button"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          Добавить в корзину
        </button>
        <div className="catalog-item-background"></div>
      </article>
    );
  }
}

export default Item;
