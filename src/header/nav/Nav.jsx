import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../index.css";
import "boxicons";

const Nav = () => {
  // const style = {
  //   backgroundColor:
  //     document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
  //       ? " transparent"
  //       : "black",
  // };

  return (
    <nav>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="font-50 open-nav">
          <i className="bx bx-menu" />
        </div>

        <NavLink className="logo" to={"/home"}>
          <img
            src="https://patiotime.loftocean.com/wp-content/uploads/2022/04/pt-logo.svg"
            alt=""
          />
        </NavLink>

        <ul
          className="color-white d-flex font-20 font-content align-items-center"
          style={{ marginBottom: 0, padding: 0 }}
        >
          <li>
            <NavLink className="color-white" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="position-relative introduce">
            <p style={{ marginBottom: 0 }}>Abouts</p>
          </li>
          <li>
            <NavLink className="color-white" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="color-white" to="/blog">
              Blog
            </NavLink>
          </li>
          <li className="none-pd">
            <button className="set-btn btn-form">FIND A TABLE</button>
          </li>
          <li className="none-pd">
            <NavLink className="set-btn" to="/order">
              {" "}
              ORDER ONLINE
            </NavLink>
          </li>
          <li className="font-24">
            <NavLink to="cart.html" className="color-white">
              <i className="bx bx-cart" />
            </NavLink>
          </li>
          <li className="sign-open font-24">
            <i className="bx bx-user" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
