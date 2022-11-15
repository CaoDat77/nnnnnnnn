import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function DirectionalContact() {
  return (
    <div className="mg-t-80">
      <div className="row pd-t-80 none-pd-80 align-items-center">
        <div
          className="col-xl-6 col-12"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div className="contact-home-page">
            <div>
              <p className="font-20 pimary-color font-w line-primary font-nor">
                RIGHT HERE WAITING
              </p>
            </div>
            <div className>
              <h1 className="font-50">VISIT OUR RESTAURANT</h1>
            </div>
            <div className>
              <p className="font-16 font-nor">
                We see our customers as invited guests to a party, and we are
                the hosts. Piazza della Signoria, 1050122 . Firenze . Italy
              </p>
            </div>
            <div className="font-16 font-nor">
              <p>M: booking@patiotime.com</p>
              <p>T: +39 055 1234567</p>
            </div>
            <div className="pd-t-30">
              <NavLink className="pimary-color set-btn" to="/contact">
                GET DIRECTIONS
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="pd-lr-20 d-flex align-items-center">
            <div
              className="overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <img src="/contact-home-1.svg" alt="" />
            </div>
            <div
              className="overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration={2000}
            >
              <img src="/contact-home-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectionalContact;
