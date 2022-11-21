import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "boxicons";
import { Modal, Button } from "react-bootstrap";

const Nav = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className="abouts font-nor">
              <div className="ab-us pd-b-10 pd-t-10 pd-l-20 border-bot">
                <NavLink className="color-white" to="/aboutRes">
                  About Restaurant
                </NavLink>
              </div>
              <div className="ab-cheff pd-b-10 pd-l-20 pd-t-10">
                <NavLink className="color-white" to="/aboutCheff">
                  About Cheff
                </NavLink>
              </div>
            </div>
            <div className="arrow" />
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
          <li className="none-pd" onClick={handleShow}>
            <button className="set-btn btn-form">FIND A TABLE</button>
          </li>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <div className="molda">
              <div className="d-flex justify-content-center align-items-center">
                <div className="form-table bg-white overflow-hidden">
                  <div className="row align-items-center overflow-hidden">
                    <div className="col-xl-6 none none-md  none-hover">
                      <img src="/image-home/image-form.svg" alt="" />
                    </div>
                    <div className="col-xl-6 col-sm-12 text-center pd-tb-30">
                      <h3 className="font-20 pimary-color font-w pd-t-30">
                        ONLINE RESERVATION
                      </h3>
                      <h1 className="font-50 font-content color-black pd-t-30">
                        BOOK A TABLE
                      </h1>
                      <form action className="mg-t-20">
                        <div className="form">
                          <div className="mg-b-20">
                            <select
                              name="persion"
                              id="persion"
                              style={{ fontSize: "1.6rem", margin: 0 }}
                            >
                              <option value>1 Persion</option>
                              <option value>2 Persion</option>
                              <option value>3 Persion</option>
                              <option value>4 Persion</option>
                              <option value>5 Persion</option>
                              <option value>6 Persion</option>
                              <option value>7 Persion</option>
                            </select>
                          </div>
                          <div className="mg-b-20">
                            <input
                              className="font-16"
                              type="date"
                              name="day"
                              id="day"
                            />
                          </div>
                          <div className="mg-b-20">
                            <select
                              name="time"
                              id="time"
                              style={{ fontSize: "1.6rem" }}
                            >
                              <option value>9h:00</option>
                              <option value>9h:30</option>
                              <option value>10h:00</option>
                              <option value>10h:30</option>
                              <option value>11h:00</option>
                              <option value>11h:30</option>
                              <option value>12h:00</option>
                              <option value>12h:30</option>
                              <option value>13h:00</option>
                              <option value>13h:30</option>
                              <option value>14h:30</option>
                              <option value>15h:00</option>
                              <option value>15h:30</option>
                              <option value>14h:00</option>
                            </select>
                          </div>
                          <div className="mg-b-20">
                            <input
                              className="font-16"
                              type="text"
                              placeholder="Phone number"
                            />
                          </div>
                          <button className="book-btn font-w ">BOOK NOW</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <span className="close-btn" onClick={handleClose}>
                <i className="bx bx-x" />
              </span>
            </div>
          </Modal>

          <li className="none-pd">
            <NavLink className="set-btn" to="/order">
              {" "}
              ORDER ONLINE
            </NavLink>
          </li>
          <li className="font-20">
            <NavLink to="cart.html" className="color-white">
              <i className="bx bx-cart" />
            </NavLink>
          </li>
          <li className="sign-open font-20 ">
            <i className="bx bx-user" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
