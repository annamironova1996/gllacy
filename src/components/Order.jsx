import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div>
        <img src={"./" + this.props.item.img} />
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.price}</p>
        <FaTrash onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    );
  }
}

export default Order;
