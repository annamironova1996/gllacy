import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
