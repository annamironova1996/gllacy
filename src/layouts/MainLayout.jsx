import { Outlet } from "react-router-dom";
import { useState } from "react";
import getProducts from "../data/getProducts";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const MainLayout = ({ handleRemoveFromCart, products }) => {
  return (
    <>
      <Menu handleRemoveFromCart={() => handleRemoveFromCart(products)} />
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
