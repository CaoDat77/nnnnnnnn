import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BookTable() {
  return (
    <div className="container-fluid">
      <div className="book-table mg-t-80 text-center pd-tb-100">
        <div className>
          <p className="font-20 pimary-color font-w line-primary font-nor">
            ONLINE RESERVATION
          </p>
          <h1 className="font-50 font-content">BOOK A TABLE</h1>
        </div>
        <div className="mg-t-40 btn-form">
          <button className="set-btn pd-t-30">BOOK A TABLE NOW</button>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
