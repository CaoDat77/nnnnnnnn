import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="header-body d-flex justify-content-center ">
      <div>
        <div
          className="text-center title-home-page d-flex justify-content-center align-items-center"
          data-aos="fade-down"
          data-aos-duration={1000}
          data-aos-delay={500}
        >
          <div className="line" />
          <h2 className="color-white font-30">Blog</h2>
          <div className="line" />
        </div>
        <div className="header-body-content">
          <div
            className="content-header text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-delay={1500}
          >
            <h1 className="color-white font-50 mg-b-20">
              Delicious Food &amp; Wonderful
            </h1>
            <h1 className="color-white font-50">Eating Experience</h1>
            <p className="font-content pd-t-20 color-white font-20">
              We Serve Food, Harmony, &amp; Laughter Since 1998
            </p>
            <div className="btn-header color-white d-flex justify-content-center pd-t-30">
              <NavLink className="pimary-color set-btn" to="/menu">
                VIEW MENU
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
