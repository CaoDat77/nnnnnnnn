import React from "react";
import { menus } from "../data/dishData";
import { useParams } from "react-router-dom";
import Banner from "../header/banner/Banner";
import "./ProductDetail.css";
function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = menus.find((product) => product.id == productId);

  return (
    <div className="color-white">
      <Banner title="CART" banner="image-order/home-page.jpg" />
      <div className="container mg-t-80">
        <div className="row align-items-center product ">
          <div className="col-xl-4">
            <div className="pd-lr-20">
              <div className="overflow-hidden border-item">
                <img src={thisProduct.img} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="name-dish pd-lr-20">
              <p className="font-24 font-content">{thisProduct.title}</p>
              <div className="rate">
                <img src="/image_order/Star 1.svg" alt="" />
                <img src="/image_order/Star 1.svg" alt="" />
                <img src="/image_order/Star 1.svg" alt="" />
                <img src="/image_order/Star 1.svg" alt="" />
              </div>
              <p className="font-20 font-nor mg-t-20 font-w">
                Price : ${thisProduct.price}
              </p>
              <p className="font-20 font-nor">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod
                dolor.
              </p>
              <p className="font-20 font-nor">
                Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt
                labore et dolore magna aliquyam.erat, sed diam voluptua. At vero
                accusam et justo duo dolores et ea rebum
              </p>
              <div className="mg-t-20">
                <div className="count d-flex align-items-center">
                  <div className="minus font-50 font-w d-flex align-items-center justify-content-center">
                    <button>-</button>
                  </div>
                  <div className="color-black font-30 font-nor count-number d-flex justify-content-center align-items-center">
                    1
                  </div>
                  <div className="plus font-30 font-w d-flex align-items-center justify-content-center">
                    <button>+</button>
                  </div>
                  <button className="set-btn mg-l-20">Add To Cart</button>
                  <a href="cart.html">
                    <button className="set-btn mg-l-20 none">
                      <i className="bx bx-cart cart" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
