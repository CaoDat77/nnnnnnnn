import React from "react";
import "./Order.css";
import BookTable from "./directionalPage/BookTable";
import Banner from "../header/banner/Banner";
import { menus } from "../data/dishData";
import DishItem from "../component/cart/Item";

function Order() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const total = menus.length;
  const pageSize = 8;
  const totalPage = Math.ceil(total / pageSize);

  const paginationItems = new Array(totalPage)
    .fill(null)
    .map((value, index) => (
      <div
        className="btn-change"
        key={index}
        active={index === currentPage}
        onClick={() => setCurrentPage(index)}
      >
        {index + 1}
      </div>
    ));

  const productsByPage = menus.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <div className="">
      <Banner title="ORDER ONLINE" banner="image-order/home-page.jpg" />
      <div className="container color-white">
        <div className="row gap-order ">
          {productsByPage.map((dish) => {
            return <DishItem key={dish.id} dish={dish} />;
          })}
        </div>
        <div className="d-flex justify-content-center">{paginationItems}</div>
      </div>
      <BookTable />
    </div>
  );
}

export default Order;
