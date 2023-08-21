import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onShowItem(this.props.item)}>
          <img src={"./" + this.props.item.img} />
        </button>
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.price}</p>
        <button onClick={() => this.props.onAdd(this.props.item)}>
          Добавить в корзину
        </button>
      </div>
    );
  }
}

export default Item;
