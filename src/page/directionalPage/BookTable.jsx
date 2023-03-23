import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BookTable() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid color-white">
      <div className="book-table mg-t-80 text-center pd-tb-100">
        <div className>
          <p className="font-20 pimary-color font-w line-primary font-nor">
            ONLINE RESERVATION
          </p>

          <h1 className="font-50 font-content">BOOK A TABLE</h1>
        </div>
        <div className="mg-t-40 btn-form">
          <button className="set-btn pd-t-30" onClick={handleShow}>
            BOOK A TABLE NOW
          </button>
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
        </div>
      </div>
    </div>
  );
}

export default BookTable;
