import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function DirectionalCheff() {
  return (
    <div className="row pd-t-80 pd-none">
      <div className="col-xl-6 col-sm-12 none">
        <div className="pd-lr-20">
          <div className="position-relative">
            <div
              className="cheff cheff-1 position-absolute overflow-hidden"
              data-aos="fade-down-left"
              data-aos-duration={1000}
              style={{ width: "90%" }}
            >
              <img src="/image-home/cheff-home-1.svg" alt="" />
            </div>
            <div
              className="cheff cheff-2 position-absolute overflow-hidden"
              data-aos="fade-up-right"
              data-aos-duration={1000}
              style={{ width: "75%" }}
            >
              <img src="/image-home/cheff-home-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-sm-12 align-items-center pd-tb-150 pd-none">
        <div className="pd-lr-20" data-aos="fade-up" data-aos-duration={1000}>
          <div className="pd-b-20">
            <p className="font-20 pimary-color font-w line-primary font-nor">
              QUALITY &amp; BALANCE
            </p>
          </div>
          <div>
            <h1 className="font-50">OUR FOOD PHILOSOPHY</h1>
          </div>
          <div className="pd-t-30">
            <p className="font-20 font-nor">
              Simple and balanced. Alexander Petillo brings together flavors and
              specialties from Italy and beyond to create his own culinary
              world, full of surprising artistry.
            </p>
          </div>
          <div className="pd-t-30">
            <NavLink className="pimary-color set-btn" to="/about">
              LEARN MORE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectionalCheff;
