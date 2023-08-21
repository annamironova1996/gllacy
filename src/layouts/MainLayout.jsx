import { Outlet } from "react-router-dom";

import Menu from "../components/Menu";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <>
      <Menu
        orders={props.orders}
        onDelete={props.onDelete}
      />
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
