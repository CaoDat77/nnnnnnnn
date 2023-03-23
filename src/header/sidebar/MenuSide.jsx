import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu, handleOnClose } from "react-burger-menu";
import "./MenuSide.css";
import { Modal, Button, Navbar } from "react-bootstrap";

function MenuSide() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
      <div className="list-nav-mobile">
        <div className="font-20 item-nav pd-t-40 font-nor">
          <div className="logo-mobile d-flex justify-content-between align-items-center pd-lr-20">
            <NavLink to="/">
              <img
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/04/pt-logo.svg"
                alt=""
              />
            </NavLink>
            <div className="close-btn-mobile" onClick={handleCloseMenu}>
              <i className="bx bx-x" />
            </div>
          </div>
          <NavLink className="color-white" to="/menu">
            <div className="nav-mobile">Menu</div>
          </NavLink>
          <div
            className="introduce-nav position-relative"
            style={{ paddingLeft: 0 }}
          >
            <div className="btn-about d-flex justify-content-between align-items-center nav-mobile">
              <p style={{ marginBottom: 0 }}>Abouts</p>
              <i className="bx bx-chevron-down" />
            </div>
            <div className="abouts-nav pd-l-40">
              <NavLink className="color-white font-16" to="/aboutRes">
                <div className="nav-mobile">About Restaurant</div>
              </NavLink>
              <NavLink className="color-white font-16" to="/aboutCheff">
                <div className="nav-mobile">About Cheff</div>
              </NavLink>
            </div>
          </div>
          <NavLink className="color-white" to="/contact">
            <div className="nav-mobile">Contact</div>
          </NavLink>
          <NavLink className="color-white" to="/blog">
            <div className="nav-mobile">Blog</div>
          </NavLink>
          <div className="nav-mobile table-online" onClick={handleShow}>
            Find A Table
          </div>
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
          <NavLink className="color-white" to="/order">
            <div className="nav-mobile">Order Online</div>
          </NavLink>
          <NavLink className="color-white" to="/cart">
            <div className="nav-mobile">
              <i className="bx bx-cart" />
            </div>
          </NavLink>
          <div className="pd-lr-20 pd-t-10">
            <div className="icons mg-b-20">
              <i className="fb bx bxl-facebook-circle" />
              <i className="ig bx bxl-instagram" />
              <i className="tw bx bxl-twitter" />
              <i className="pn bx bxl-pinterest-alt" />
              <i className="ytb bx bxl-youtube" />
            </div>
            <div className="contact-nav">
              <p className="pd-b-10">
                <i className="bx bx-location-plus" /> Silk St, Barbican, London
                EC2Y 8DS, UK
              </p>
              <p className="pd-b-10">
                <i className="bx bx-phone" /> +39-055-123456
              </p>
              <p className="pd-b-10">
                <i className="bx bx-envelope" /> booking@patiotime.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default MenuSide;
