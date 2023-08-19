import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Delivery from "./components/Delivery";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="catalog"
              element={<Catalog />}
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
