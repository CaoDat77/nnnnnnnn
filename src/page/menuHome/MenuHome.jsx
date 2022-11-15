import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function MenuHome() {
  return (
    <div className="">
      <div className="row pd-t-80 pd-b-20">
        <div className="col-xl-4 col-sm-12 pd-t-30">
          <div className="pd-lr-20" data-aos="zoom-in" data-aos-duration={1000}>
            <div className="title-dish pd-b-20">
              <p
                className="text-center font-20 pimary-color font-nor"
                style={{ margin: 0 }}
              >
                FRESH TASTE BUDS
              </p>
              <h2 className="text-center font-30 font-content">STARTERS</h2>
            </div>
            <div className="list-dish">
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Purple Corn Tostada</div>
                  <div className="price-dish">$36</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Ricotta, goat cheese, beetroot and datterini.
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Bruno's Scribble</div>
                  <div className="price-dish">$30</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Culatello, Spalla Cotta, Mortadella, Culacciona.
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Fresh Oysters Dozen</div>
                  <div className="price-dish">$59</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Our selection of fresh oysters, limes.
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Wild Mushroom Arancini</div>
                  <div className="price-dish">$18</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Porcini purée, parmesan, basil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-12 pd-t-30">
          <div className="pd-lr-20" data-aos="zoom-in" data-aos-duration={1000}>
            <div className="title-dish pd-b-20">
              <p
                className="text-center font-20 pimary-color font-nor"
                style={{ margin: 0 }}
              >
                TOP RATED DISHES
              </p>
              <h2 className="text-center font-30 font-content">MAIN DISHES</h2>
            </div>
            <div className="list-dish">
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Crispy Skin Chicken</div>
                  <div className="price-dish">$29</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Ricotta, goat cheese, beetroot and datterini.
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Flank Steak</div>
                  <div className="price-dish">$30</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Served medium rare, salad, mushroom sauce.
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Ebony Fillet Steak</div>
                  <div className="price-dish">$58</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Truffle mash, pepper sauce.
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Fish &amp; Chips</div>
                  <div className="price-dish">$18</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Atlantic cod fillet, chips, salad, tartare, lemon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-12 pd-t-30">
          <div className="pd-lr-20" data-aos="zoom-in" data-aos-duration={1000}>
            <div className="title-dish pd-b-20">
              <p
                className="text-center font-20 pimary-color font-nor"
                style={{ margin: 0 }}
              >
                DRINK &amp; WINES
              </p>
              <h2 className="text-center font-30 font-content">BEVERAGE</h2>
            </div>
            <div className="list-dish">
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Prickly Pear Tonic</div>
                  <div className="price-dish">$12</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Prickly Pear, Chancaca, Key Lime, and Tonic
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Tommy's Margarita</div>
                  <div className="price-dish">$12</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Tequila, fresh lime juice, and orange liqueur
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Chicha Morada</div>
                  <div className="price-dish">$16</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Purple Corn, Pineapple, Apple, Cinnamon
                  </p>
                </div>
              </div>
              <div className="item-dish pd-b-10">
                <div className="d-flex justify-content-between font-20 font-content">
                  <div className="name-dish">Better Boy</div>
                  <div className="price-dish">$10</div>
                </div>
                <div className="decs-dish">
                  <p className="font-nor font-16">
                    Tomato, Salt, Black Pepper, Lemon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex gap-20 justify-content-center pd-b-100">
        <div data-aos="zoom-in-up" data-aos-duration={2000}>
          <NavLink className="pimary-color set-btn" to="/menu">
            {" "}
            VIEW MENUS{" "}
          </NavLink>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration={2000}>
          <NavLink className="pimary-color set-btn" to="/order">
            {" "}
            ORDER ONLINE
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MenuHome;
