import React from "react";
import Navbar from "../Componend/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Componend/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
