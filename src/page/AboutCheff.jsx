import BookTable from "./directionalPage/BookTable";
import "./AboutCheff.css";
import Banner from "../header/banner/Banner";
function AboutCheff() {
  return (
    <div className="">
      <Banner banner="image-cheff/home-page.jpg" title="MEET OUR CHEFF" />
      <div className="color-white">
        <div className="container mg-t-80">
          <div className="row align-items-center">
            <div className="col-xl-6 col-12 pd-lr-20">
              <div className="chef-avatar d-flex position-relative">
                <img src="/image-cheff/cheff-1.svg" alt="" />
                <div className="lineImg none">
                  <img src="/image-cheff/line.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="info-chef pd-lr-20 mg-t-20">
                <h3 className="font-nor font-20 pimary-color pd-b-20">
                  OUR EXECUTIVE CHEF
                </h3>
                <h2 className="font-30 font-content pd-b-20">
                  Alexander Petillo
                </h2>
                <p className="font-nor font-16 pd-b-20">
                  Food is the foundation of true happiness. Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit aenean commodo.
                </p>
                <p className="font-nor font-16 pd-b-20">
                  We see our customers as invited guests to a party, and we are
                  the hosts. It’s our job every day to make every important
                  aspect of the customer experience a little bit better. Donec
                  quam felis, ultricies nec, pellentesque eu.
                </p>
                <div className="icons font-20 mg-t-20 pd-b-20">
                  <i className="bx bxl-facebook-circle" />
                  <i className="bx bxl-instagram" />
                  <i className="bx bxl-twitter" />
                  <i className="bx bxl-pinterest-alt" />
                  <i className="bx bxl-youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mg-t-80">
          <div className="bg-comment position-relative">
            <div className="comment text-center">
              <div className="font-30 font-w pimary-color">/ /</div>
              <p className="font-30 font-content">
                "A distinctive, well-preserved and comfortable space,
                high-quality products, authentic cuisine, food and drinks are
                done flawlessly."
              </p>
            </div>
            <div className="prose">
              <img src="/image-cheff/nameCheff.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="container mg-t-80">
          <div className="row">
            <div className="col-xl-4">
              <div className="assistant">
                <div className="overflow-hidden">
                  <img src="/image-cheff/cheff-2.svg" alt="" />
                </div>
                <h3 className="font-nor pimary-color font-20 font-w pd-t-20">
                  SOUS CHEF
                </h3>
                <p className="font-16 font-content">Lorenzo Morelli</p>
                <p className="font-20 font-nor">
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  mus.
                </p>
                <div className="icons font-20 mg-t-20">
                  <i className="bx bxl-facebook-circle" />
                  <i className="bx bxl-instagram" />
                  <i className="bx bxl-twitter" />
                  <i className="bx bxl-pinterest-alt" />
                  <i className="bx bxl-youtube" />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="assistant">
                <div className="overflow-hidden">
                  <img src="/image-cheff/cheff-3.svg" alt="" />
                </div>
                <h3 className="font-nor pimary-color font-20 font-w pd-t-20">
                  PASTRY CHEF
                </h3>
                <p className="font-16 font-content">Aaliyah Williams</p>
                <p className="font-20 font-nor">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa pretium quis,
                  sem quis.
                </p>
                <div className="icons font-20 mg-t-20">
                  <i className="bx bxl-facebook-circle" />
                  <i className="bx bxl-instagram" />
                  <i className="bx bxl-twitter" />
                  <i className="bx bxl-pinterest-alt" />
                  <i className="bx bxl-youtube" />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="assistant">
                <div className="overflow-hidden">
                  <img src="/image-cheff/cheff-4.svg" alt="" />
                </div>
                <h3 className="font-nor pimary-color font-20 font-w pd-t-20">
                  SAUTÉ CHEF
                </h3>
                <p className="font-16 font-content">Lyon Blanchet</p>
                <p className="font-20 font-nor">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo.
                </p>
                <div className="icons font-20 mg-t-20">
                  <i className="bx bxl-facebook-circle" />
                  <i className="bx bxl-instagram" />
                  <i className="bx bxl-twitter" />
                  <i className="bx bxl-pinterest-alt" />
                  <i className="bx bxl-youtube" />
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

export default AboutCheff;
