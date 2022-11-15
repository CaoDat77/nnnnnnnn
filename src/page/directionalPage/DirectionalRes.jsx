import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function DirectionalRes() {
  return (
    <div className="row align-items-end ">
      <div className="col-xl-6 col-sm-12">
        <div className="pd-lr-20" data-aos="fade-down" data-aos-duration={1000}>
          <div className="font-20 pimary-color font-w line-primary">
            <h3>REFRESH YOUR TASTE BUDS</h3>
          </div>
          <div className="mg-t-20">
            <h1 className="pd-t-30 font-50">
              Enjoy An Exceptional Journey of Taste
            </h1>
          </div>
          <div className="mg-t-30">
            <p className="font-20 font-nor mg-t-20">
              We see our customers as invited guests to a party, and we are the
              hosts. It’s our job every day to make every important aspect of
              the customer experience a little bit better.
            </p>
          </div>
          <div className="mg-tb-20">
            <NavLink to="/about">
              <button className="set-btn">READ MORE</button>
            </NavLink>
          </div>
        </div>
        <div className="pd-lr-20">
          <div
            className="overflow-hidden"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <img src="/dish1.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="col-xl-6 none">
        <div className="pd-lr-20">
          <div
            className="overflow-hidden"
            data-aos="fade-left"
            data-aos-duration={1000}
          >
            <img src="/dish2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectionalRes;
