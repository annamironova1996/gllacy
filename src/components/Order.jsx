import React, { Component } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./Order.css";

export class Order extends Component {
  render() {
    return (
      <div className="order-item">
        <button
          type="button"
          className="order-item-close"
          onClick={() => this.props.onDelete(this.props.item.id)}
        >
          <IoCloseSharp />
        </button>

        <img
          src={"./" + this.props.item.img}
          width="33px"
          height="33px"
        />
        <h3>{this.props.item.title}</h3>
        <p>вес в рублях</p>
        <p>{this.props.item.price} руб.</p>
      </div>
    );
  }
}

export default Order;
