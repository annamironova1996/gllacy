import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Delivery from "./components/Delivery";
import About from "./components/About";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: "orange.png",
          category: "creamy",
          status: "hit",
          title: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
          price: "310",
        },
        {
          id: 2,
          img: "chocolate.png",
          category: "creamy",
          status: "hit",
          title: "Сливочно-кофейное с кусочками шоколада",
          price: "380",
        },
        {
          id: 3,
          img: "strawberry.png",
          category: "creamy",
          status: "hit",
          title: "Сливочно-клубничное с присыпкой из белого шоколада",
          price: "355",
        },
        {
          id: 4,
          img: "caramel.png",
          category: "creamy",
          status: "hit",
          title: "Сливочное крем-брюле с карамельной подливкой",
          price: "415",
        },

        {
          id: 5,
          img: "cowberry.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочное с брусничным джемом",
          price: "325",
        },
        {
          id: 6,
          img: "blueberry.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочно-черничное с цельными ягодами черники",
          price: "410",
        },
        {
          id: 7,
          img: "lemon.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочно-лимонное с карамельной присыпкой",
          price: "375",
        },
        {
          id: 8,
          img: "chocolate_shavings.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочное с шоколадной стружкой",
          price: "320",
        },
        {
          id: 9,
          img: "vanilla.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочно-ванильное с кусочками шоколада",
          price: "440",
        },
        {
          id: 10,
          img: "menthol.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочное с ментоловым сиропом",
          price: "435",
        },
        {
          id: 11,
          img: "dark_chocolate.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочное с кусочками черного шоколада",
          price: "355",
        },
        {
          id: 12,
          img: "mint.png",
          category: "creamy",
          status: "not-a-hit",
          title: "Сливочное с мятным сиропом",
          price: "420",
        },
      ],
      currentItems: [],
      showFullItem: false,
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout
                  orders={this.state.orders}
                  onDelete={this.deleteOrder}
                />
              }
            >
              <Route
                index
                element={<Home items={this.state.currentItems} />}
              />
              <Route
                path="catalog"
                element={
                  <Catalog
                    items={this.state.currentItems}
                    onAdd={this.addToOrder}
                    showFullItem={this.state.showFullItem}
                    onShowItem={this.onShowItem}
                    chooseCategory={this.chooseCategory}
                    item={this.state.fullItem}
                  />
                }
              />
              <Route
                path="delivery"
                element={<Delivery />}
              />
              <Route
                path="about"
                element={<About />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
