import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";
import Banner from "../../header/banner/Banner";
import Nav from "../../header/nav/Nav";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.color}>
      <header className={styles.banner}>
        <div className="container">
          <div className="d-flex justify-content-center w-100">
            <Nav />
          </div>
          <div className="mg-t-80">
            <Banner />
          </div>
        </div>
      </header>
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
