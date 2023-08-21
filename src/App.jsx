import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import getProducts from "./data/getProducts";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Delivery from "./components/Delivery";
import About from "./components/About";
import "./App.css";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(getProducts());

  const handleAddProductToCart = (productID) => {
    setCartProducts([...cartProducts, productID]);
  };
  const handleRemoveFromCart = (productID) => {
    const newCartProducts = cartProducts.filter((id) => id !== productID);
    setCartProducts(newCartProducts);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                products={products}
                onChange={() => handleRemoveFromCart()}
              />
            }
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="catalog"
              element={
                <Catalog
                  products={products}
                  onChange={() => handleAddProductToCart}
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

export default App;
