import React, { Component } from "react";

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
      <div>
        {this.state.categories.map((el) => (
          <button
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
