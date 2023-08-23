import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { BiChevronsRight } from "react-icons/bi";
import Categories from "./Categories";
import ShowFullItem from "./ShowFullItem";
import "./Catalog.css";

export class Catalog extends Component {
  render() {
    return (
      <main className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог товаров Глейси</h2>
          <div className="catalog-navigation">
            <Link
              to=".."
              relative="path"
            >
              Главная
            </Link>
            <BiChevronsRight className="catalog-icon" />
            <Link
              path="."
              relative="path"
            >
              Каталог
            </Link>
          </div>
          <div className="catalog-categories">
            <Categories chooseCategory={this.props.chooseCategory} />
          </div>

          <div className="catalog-items">
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
          </div>
        </div>
      </main>
    );
  }
}

export default Catalog;
