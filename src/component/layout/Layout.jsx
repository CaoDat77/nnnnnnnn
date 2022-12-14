import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.color}>
      <Header />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
