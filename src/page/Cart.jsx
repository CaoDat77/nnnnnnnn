import Banner from "../header/banner/Banner";
import "./Cart.css";
export default function Cart() {
  return (
    <>
      <Banner title="CART" banner="image-menu/banner.jpg" />
      <main className="mg-t-80">
        <div className="molda">
          <div className="d-flex justify-content-center align-items-center">
            <div className="form-table bg-white overflow-hidden">
              <div className="row align-items-center overflow-hidden">
                <div className="col-xl-6 none overflow-hidden">
                  <img src="/image/image-form.svg" alt="" />
                </div>
                <div className="col-xl-6 col-sm-12 text-center pd-tb-30">
                  <h3 className="font-20 pimary-color font-w pd-t-30">
                    ONLINE RESERVATION
                  </h3>
                  <h1 className="font-50 font-content color-black pd-t-30">
                    BOOK A TABLE
                  </h1>
                  <form action="" className="mg-t-20">
                    <div className="form">
                      <div className="mg-b-20">
                        <select
                          name="persion"
                          id="persion"
                          style={{ fontSize: "1.6rem" }}
                        >
                          <option value="">1 Persion</option>
                          <option value="">2 Persion</option>
                          <option value="">3 Persion</option>
                          <option value="">4 Persion</option>
                          <option value="">5 Persion</option>
                          <option value="">6 Persion</option>
                          <option value="">7 Persion</option>
                        </select>
                      </div>
                      <div className="mg-b-20">
                        <input
                          className="font-16"
                          type="date"
                          name="day"
                          id="day"
                          defaultValue="30-9-2022"
                        />
                      </div>
                      <div className="mg-b-20">
                        <select
                          name="persion"
                          id="persion"
                          style={{ fontSize: "1.6rem" }}
                        >
                          <option value="">9h:00</option>
                          <option value="">9h:30</option>
                          <option value="">10h:00</option>
                          <option value="">10h:30</option>
                          <option value="">11h:00</option>
                          <option value="">11h:30</option>
                          <option value="">12h:00</option>
                          <option value="">12h:30</option>
                          <option value="">13h:00</option>
                          <option value="">13h:30</option>
                          <option value="">14h:30</option>
                          <option value="">15h:00</option>
                          <option value="">15h:30</option>
                          <option value="">14h:00</option>
                        </select>
                      </div>
                      <div className="mg-b-20">
                        <input
                          className="font-16"
                          type="number"
                          placeholder="Phone number"
                        />
                      </div>
                      <button className="set-btn font-w">BOOK NOW</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <span className="close-btn">
            <i className="bx bx-x" />
          </span>
        </div>
        <div className="container border">
          <div className="list-dish">
            <div className="item-dish d-flex align-items-center justify-content-between flex-colunm">
              <img src="/image_order/dish-1-1.svg" alt="" />
              <p className="font-20">Purple Corn Tostada</p>
              <div className="count d-flex">
                <div className="minus font-30 font-w d-flex align-items-center justify-content-center">
                  <p style={{ margin: 0 }}>a</p>
                </div>
                <div className="count-number d-flex justify-content-center align-items-center">
                  <p className="color-black font-24" style={{ margin: 0 }}>
                    1
                  </p>
                </div>
                <div className="plus font-30 font-w d-flex align-items-center justify-content-center">
                  <p className="color-black" style={{ margin: 0 }}>
                    +
                  </p>
                </div>
              </div>
              <div className="total font-20">total:$29</div>
              <i className="font-50 bx bx-x-circle" />
            </div>
            <div className="item-dish d-flex align-items-center justify-content-between flex-colunm">
              <img src="/image_order/dish-1-1.svg" alt="" />
              <p className="font-20">Purple Corn Tostada</p>
              <div className="count d-flex">
                <div className="minus font-30 font-w d-flex align-items-center justify-content-center">
                  <p style={{ margin: 0 }}>a</p>
                </div>
                <div className="count-number d-flex justify-content-center align-items-center">
                  <p className="color-black font-24" style={{ margin: 0 }}>
                    1
                  </p>
                </div>
                <div className="plus font-30 font-w d-flex align-items-center justify-content-center">
                  <p className="color-black" style={{ margin: 0 }}>
                    +
                  </p>
                </div>
              </div>
              <div className="total font-20">total:$29</div>
              <i className="font-50 bx bx-x-circle" />
            </div>
          </div>
        </div>
        <div className="container mg-t-80">
          <div className="row">
            <div className="col-xl-6 none">
              <p className="font-20 font-nor">You may be interested in…</p>
              <div className="row">
                <div className="col-xl-6">
                  <div className="pd-lr-20 pointer">
                    <div className="overflow-hidden position-relative dish-item">
                      <img src="/image_order/dish-1-2.svg" alt="" />
                      <button className="add-cart-btn">ADD TO CARD</button>
                    </div>
                    <div className="d-flex justify-content-between font-16 font-nor mg-t-10">
                      <div className="name-dish">
                        <p>Purple Corn Tostada</p>
                      </div>
                      <div className="price">$30</div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="pd-lr-20 pointer">
                    <div className="overflow-hidden position-relative dish-item">
                      <img src="/image_order/dish-1-3.svg" alt="" />
                      <button className="add-cart-btn">ADD TO CARD</button>
                    </div>
                    <div className="d-flex justify-content-between font-16 font-nor mg-t-10">
                      <div className="name-dish">
                        <p>Fresh Oysters Dozen</p>
                      </div>
                      <div className="price">$36</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <p className="font-nor font-20 pimary-color">Cart totals</p>
              <div className="form-order border font-20">
                <div className="row">
                  <div className="col-xl-5 col-sm-6">
                    <div className="form-order-left">
                      <p className="font-w">Subtotal</p>
                      <p className="font-w">Shipping</p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-sm-6">
                    <div className="form-order-right">
                      <p>$55.00</p>
                      <p>Flat rate $9.00</p>
                      <p className="mg-b-20">Address</p>
                      <form action="">
                        <select name="" id="">
                          <option value="">City</option>
                        </select>
                        <select name="" id="">
                          <option value="">Provinces</option>
                        </select>
                        <select name="" id="">
                          <option value="">Pistrict</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="font-20 font-w font-nor form-order-left">
                      <p className="pd-b-20" style={{ margin: 0 }}>
                        Total
                      </p>
                      <p className="font-16">Choose A Payment Method</p>
                    </div>
                  </div>
                  <div className="col-xl-7">
                    <div className="form-order-right">
                      <p style={{ margin: 0 }} className="font-w pd-b-20">
                        $64
                      </p>
                      <div className="d-flex choose">
                        <input type="radio" name="pay" id="radio-1" />
                        <label className="pd-l-20" htmlFor="radio-1">
                          Cash Payment
                        </label>
                      </div>
                      <div className="d-flex choose">
                        <input type="radio" name="pay" id="radio-1" />
                        <label className="pd-l-20" htmlFor="radio-1">
                          Bank Transfer
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="set-btn mg-t-20 text-center btn-order">Order</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
