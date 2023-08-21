import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import Categories from "./Categories";
import ShowFullItem from "./ShowFullItem";

export class Catalog extends Component {
  render() {
    return (
      <main>
        <h2>Каталог товаров Глейси</h2>
        <Link
          to=".."
          relative="path"
        >
          Главная
        </Link>
        <Link
          path="."
          relative="path"
        ></Link>
        <Categories chooseCategory={this.props.chooseCategory} />
        <article>
          {this.props.items.map((el) => (
            <Item
              onShowItem={this.props.onShowItem}
              key={el.id}
              item={el}
              onAdd={this.props.onAdd}
            />
          ))}
          {this.props.showFullItem && (
            <ShowFullItem
              title={this.props.item.title}
              price={this.props.item.price}
              img={"./" + this.props.item.img}
            />
          )}
        </article>
      </main>
    );
  }
}

export default Catalog;
