import React from "react";
import "../index.css";
import "boxicons/css/boxicons.min.css";

function Footer() {
  return (
    <footer className="mg-t-80 color-white">
      <div className="container">
        <div className="row align-items-top">
          <div className="col-xl-4 pd-b-30 col-sm-12">
            <div className="pd-lr-20">
              <h2 className="font-30 font-content">Patio.Time</h2>
              <p className="font-16 font-nor mg-t-20">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              </p>
              <div className="icons mg-t-20">
                <i className="fb bx bxl-facebook-circle" />
                <i className="ig bx bxl-instagram" />
                <i className="tw bx bxl-twitter" />
                <i className="pn bx bxl-pinterest-alt" />
                <i className="ytb bx bxl-youtube" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 pd-b-30 col-sm-12">
            <div className="pd-lr-20">
              <h2 className="font-24">WORKING HOURS</h2>
              <div className="time-work font-16 font-nor mg-t-20">
                <div className="d-flex justify-content-between">
                  <p>Monday - Friday</p>
                  <p>09:00 - 22:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Saturday</p>
                  <p className="line-footer" />
                  <p>11:00 -00:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Sunday</p>
                  <p className="line-footer" />
                  <p>11:00 - 23:00</p>
                </div>
                <div className="d-flex justify-content-between mg-t-20">
                  <p>* Happy hour</p>
                  <p>17:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 pd-b-30 col-sm-12">
            <div className="pd-lr-20">
              <h2 className="font-24">OUR ADDRESS</h2>
              <div className="time-work font-16 font-nor mg-t-20 contact-home">
                <p className="pd-b-20">
                  <i className="bx bx-location-plus" /> Silk St, Barbican,
                  London EC2Y 8DS, UK
                </p>
                <p className="pd-b-20">
                  <i className="bx bx-phone" /> +39-055-123456
                </p>
                <p className="pd-b-20">
                  <i className="bx bx-envelope" /> booking@patiotime.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
