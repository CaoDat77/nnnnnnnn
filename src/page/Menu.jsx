import BookTable from "./directionalPage/BookTable";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import Banner from "../header/banner/Banner";
function Menu() {
  return (
    <div className="">
      <Banner title="OUR MENU" banner="image-menu/banner.jpg" />
      <div className="color-white mg-t-80">
        <div className="container">
          {/* Khai vị */}
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="col-xl-12">
                <div className="pd-menu d-flex align-items-center">
                  <div className="dish-start-1 overflow-hidden">
                    <img src="/image-menu/pic_start-1.svg" alt="" />
                  </div>
                  <div className="pic-dish-start-2 overflow-hidden">
                    <img src="/image-menu/pic_start-2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="pd-menu">
                <h2 className="font-20 pimary-color line-primary font-w mg-b-20">
                  STARTED
                </h2>
                <div className="item-dish mg-b-20">
                  <div className="d-flex justify-content-between font-24 font-content">
                    <div className="name-dish">Purple Tostada</div>
                    <div className="price">$36</div>
                  </div>
                  <div className="font-16 font-nor">
                    <p>Ricotta, goat cheese, beetroot and datterini</p>
                  </div>
                </div>
                <div className="item-dish mg-b-20">
                  <div className="d-flex justify-content-between font-24 font-content">
                    <div className="name-dish">Bruno's Scribble</div>
                    <div className="price">$30</div>
                  </div>
                  <div className="font-16 font-nor">
                    <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                  </div>
                </div>
                <div className="item-dish mg-b-20">
                  <div className="d-flex justify-content-between font-24 font-content">
                    <div className="name-dish">Fresh Oysters</div>
                    <div className="price">$59</div>
                  </div>
                  <div className="font-16 font-nor">
                    <p>Our selection of fresh oysters, limes.</p>
                  </div>
                </div>
                <div className="item-dish mg-b-20">
                  <div className="d-flex justify-content-between font-24 font-content">
                    <div className="name-dish">Wild Mushroom</div>
                    <div className="price">$18</div>
                  </div>
                  <div className="font-16 font-nor">
                    <p>Porcini purée, parmesan, basil.</p>
                  </div>
                </div>
                <div className="mg-t-30">
                  <NavLink className="set-btn font-w" to="order">
                    ORDER ONLINE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Đồ uống */}
          <div className="container mg-t-80">
            <div className="row">
              <div className="col-xl-6">
                <div className="pd-menu">
                  <h2 className="font-20 pimary-color line-primary font-w mg-b-20">
                    BEVERAGES
                  </h2>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Prickly Pear Tonic</div>
                      <div className="price">$12</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>Prickly Pear, Chancaca, Key Lime, and Tonic</p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Chicha Morada</div>
                      <div className="price">$12</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>Purple Corn, Pineapple, Apple, Cinnamon, and Clove</p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Better Boy</div>
                      <div className="price">$16</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>Tomato, Salt, Black Pepper, Lemon, Worcestershire</p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Tommy's Margarita</div>
                      <div className="price">$10</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>Tequila, fresh lime juice, and orange liqueur</p>
                    </div>
                  </div>
                  <div className="mg-t-30">
                    <NavLink className="set-btn font-w" to="order">
                      ORDER ONLINE
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="pd-menu d-flex align-items-center">
                  <div className="dish-start-1 overflow-hidden">
                    <img src="/image-menu/pic-drink.svg" alt="" />
                  </div>
                  <div className="pic-dish-start-2 overflow-hidden">
                    <img src="/image-menu/pic-drink-2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Món Chính */}
          <div className="container mg-t-80">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="pd pd-menu">
                  <div className="overflow-hidden">
                    <img src="/image-menu/pic-main.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="pd-menu">
                  <h2 className="font-20 pimary-color line-primary font-w mg-b-20">
                    MAIN COURSES
                  </h2>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Ebony Fillet Steak</div>
                      <div className="price">$58</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Truffle mash, charred baby cos, pico de gallo, pepper
                        sauce.
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">
                        Flank Steak
                        <small className="small-text font-nor pimary-color">
                          RECOMMENDED
                        </small>
                      </div>
                      <div className="price">$30</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Served medium rare, chips, house salad, mushroom sauce.
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Crispy Chicken</div>
                      <div className="price">$29</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Ricotta, radicchio, peach &amp; prosciutto salad,
                        cabernet jus.
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Pan Barramundi</div>
                      <div className="price">$38</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Barley, quinoa, grilled zucchini, corn &amp; tomato
                        salsa
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Beer Battered Fish</div>
                      <div className="price">$42</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>Atlantic cod fillet, chips, salad, tartare, lemon.</p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Blue Eyed Cod</div>
                      <div className="price">$18</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Mussels, lobster bisque, heirloom tomato &amp; summer
                        herbs.
                      </p>
                    </div>
                  </div>
                  <div className="mg-t-30">
                    <NavLink className="set-btn font-w" to="order">
                      ORDER ONLINE
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mg-t-80">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="pd-menu">
                  <h2 className="font-20 pimary-color line-primary font-w mg-b-20">
                    DESSERTS
                  </h2>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Salted Caramel Tart</div>
                      <div className="price">$10</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Salted caramel custard tart, vanilla ice-cream, almond
                        biscuit
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Basque cheesecake</div>
                      <div className="price">$9</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Puff pastry, poached rhubarb, cheesecake mousse, vanilla
                        ice-cream
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Red Cheese Mousse</div>
                      <div className="price">$6</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Cheese mousse, hazelnut &amp; chocolate snow,
                        strawberry, lemon gel.
                      </p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Warm Apple Cake</div>
                      <div className="price">$12</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>Apple, sorbet, brown butter, puff pastry.</p>
                    </div>
                  </div>
                  <div className="item-dish mg-b-20">
                    <div className="d-flex justify-content-between font-24 font-content">
                      <div className="name-dish">Classic Tiramisù</div>
                      <div className="price">$15</div>
                    </div>
                    <div className="font-16 font-nor">
                      <p>
                        Espresso-soaked ladyfingers, whipped cream, mascarpone.
                      </p>
                    </div>
                  </div>
                  <div className="mg-t-30">
                    <NavLink className="set-btn font-w" to="order">
                      ORDER ONLINE
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="pd-menu d-flex align-items-center">
                  <div className="dish-start-1 overflow-hidden">
                    <img src="/image-menu/pic-dess-1.svg" alt="" />
                  </div>
                  <div className="pic-dish-start-2 overflow-hidden">
                    <img src="/image-menu/pic-dess-2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookTable />
      </div>
    </div>
  );
}

export default Menu;
