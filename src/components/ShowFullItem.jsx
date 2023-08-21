import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <>
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.price}</p>
      </>
    );
  }
}

export default ShowFullItem;
