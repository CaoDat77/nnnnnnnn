import "./Custom.css";

function Custom() {
  return (
    <div className="">
      <div className="container">
        <div
          className="title-home-page d-flex justify-content-center align-items-center mg-t-80"
          data-aos="fade-down"
          data-aos-duration={1000}
          data-aos-delay={500}
        >
          <div className="line" />
          <h2 className="pimary-color font-30 font-content">TESTIMONIALS</h2>
          <div className="line" />
        </div>
        <div className="text-center mg-t-20">
          <h1 className="font-50  color-white">WHAT PEOPLE ARE SAYING</h1>
        </div>
        <div className="text-center mg mg-t-20">
          <p className="font-nor font-16 color-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis.
          </p>
        </div>
        <div className="feedback row pd-t-80 color-white">
          <div data-aos="fade-up" data-aos-duration={3000}>
            <div className="slider">
              <div className="pd-x-40">
                <div className="text-center mg-t-20">
                  <p
                    className="font-30 pimary-color font-w"
                    style={{ margin: 0 }}
                  >
                    / /
                  </p>
                  <p className="color-white font-20 pd-lr-20 font-nor">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Maecenas nec odio et ante.
                    Donec quam felis ultri nec.
                  </p>
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center cus">
                    <img src="/image-res/img_cus.jpg" alt="" />
                  </div>
                  <div className="font-20 font-nor font-w">Betsy Ward</div>
                  <p className="font-16 font-nor">Blogger</p>
                </div>
              </div>
              <div className="pd-x-40">
                <div className="text-center mg-t-20">
                  <p
                    className="font-30 pimary-color font-w"
                    style={{ margin: 0 }}
                  >
                    / /
                  </p>
                  <p className="color-white font-20 pd-lr-20 font-nor">
                    Food is the foundation of true happiness. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit aenean commodo. Donec
                    quam felis ultri nec.
                  </p>
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center cus">
                    <img src="/image-res/cus-2.svg" alt="" />
                  </div>
                  <div className="font-20 font-nor font-w">Jessy</div>
                  <p className="font-16 font-nor">Youtuber</p>
                </div>
              </div>
              <div className="pd-x-40">
                <div className="text-center mg-t-20">
                  <p
                    className="font-30 pimary-color font-w"
                    style={{ margin: 0 }}
                  >
                    / /
                  </p>
                  <p className="color-white font-20 pd-lr-20 font-nor">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Quisque rutrum aenean leo ligula. Nulla consequat
                    massa quis enim.
                  </p>
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center cus">
                    <img src="/image-res/cus-3.svg" alt="" />
                  </div>
                  <div className="font-20 font-nor font-w">William</div>
                  <p className="font-16 font-nor">Coffee Lover</p>
                </div>
              </div>
              <div className="pd-x-40">
                <div className="text-center mg-t-20">
                  <p
                    className="font-30 pimary-color font-w"
                    style={{ margin: 0 }}
                  >
                    / /
                  </p>
                  <p className="color-white font-20 pd-lr-20 font-nor">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Maecenas nec odio et ante.
                    Donec quam felis ultri nec.
                  </p>
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center cus">
                    <img src="/image-res/cus-4.svg" alt="" />
                  </div>
                  <div className="font-20 font-nor font-w">Alice Wayne</div>
                  <p className="font-16 font-nor">Critic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
