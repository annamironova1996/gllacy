import React, { Component } from "react";
import "./Categories.css";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "creamy",
          name: "Сливочные",
        },
        {
          key: "chocolate",
          name: "Шоколадные",
        },
        {
          key: "vanilla",
          name: "Ванильные",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <button
            className="categories-button"
            key={el.key}
            onClick={() => this.props.chooseCategory(el.key)}
          >
            {el.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
