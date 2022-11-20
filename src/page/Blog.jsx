import "./Blog.css";
import BookTable from "./directionalPage/BookTable";

function Blog() {
  return (
    <div className="color-white mg-t-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 pd-b-30 col-md-6">
            <div className="test pd-lr-30">
              <div className="overflow-hidden">
                <img src="/image-blog/pic-1.svg" alt="" />
              </div>
              <p className="font-20 pd-t-10">
                JANUARY 20, 2022 <b className="pimary-color">RECIPES</b>
              </p>
              <p className="font-20 font-content">Smoked Salmon Tart</p>
              <p className="font-16 font-nor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur …
              </p>
              <div className=" ">
                <p className="font-20 font-w font-nor">Read More</p>
                <div className="line-bot" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 pd-b-30 col-md-6">
            <div className="test pd-lr-30">
              <div className="overflow-hidden">
                <img src="/image-blog/pic-2.svg" alt="" />
              </div>
              <p className="font-20 pd-t-10">
                MARCH 16, 2022 <b className="pimary-color">FOOD STORY NEWS</b>
              </p>
              <p className="font-20 font-content">
                Wonderful Eating Experience
              </p>
              <p className="font-16 font-nor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur …
              </p>
              <div className=" ">
                <p className="font-20 font-w font-nor">Read More</p>
                <div className="line-bot" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 pd-b-30 col-md-6">
            <div className="test pd-lr-30">
              <div className="overflow-hidden">
                <img src="/image-blog/pic-3.svg" alt="" />
              </div>
              <p className="font-20 pd-t-10">
                JUNE 2, 2022 <b className="pimary-color">NEWS</b>
              </p>
              <p className="font-20 font-content">
                PatioTime Restaurant Now Offering
              </p>
              <p className="font-16 font-nor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur …
              </p>
              <div className>
                <p className="font-20 font-w font-nor">Read More</p>
                <div className="line-bot" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 pd-b-30 col-md-6">
            <div className="test pd-lr-30">
              <div className="overflow-hidden">
                <img src="/image-blog/pic-4.svg" alt="" />
              </div>
              <p className="font-20 pd-t-10">
                JULY 23, 2022 <b className="pimary-color">FOOD STORY</b>
              </p>
              <p className="font-20 font-content">
                Love and food: It is all about spice
              </p>
              <p className="font-16 font-nor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur …
              </p>
              <div className>
                <p className="font-20 font-w font-nor">Read More</p>
                <div className="line-bot" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mg-b-40">
          <div className="col-xl-6 pd-b-30 col-md-6">
            <div className="test pd-lr-30">
              <div className="overflow-hidden">
                <img src="/image-blog/pic-5.svg" alt="" />
              </div>
              <p className="font-20 pd-t-10">
                OCTOBER 8, 2022{" "}
                <b className="pimary-color">FOOD STORY RECIPES</b>
              </p>
              <p className="font-20 font-content">
                Food is the foundation of true happiness
              </p>
              <p className="font-16 font-nor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur …
              </p>
              <div className>
                <p className="font-20 font-w font-nor">Read More</p>
                <div className="line-bot" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 pd-b-30 col-md-6">
            <div className="test pd-lr-30">
              <div className="overflow-hidden">
                <img src="/image-blog/pic-6.svg" alt="" />
              </div>
              <p className="font-20 pd-t-10">
                NOVEMBER 19, 2022 <b className="pimary-color">NEWS RECIPES</b>
              </p>
              <p className="font-20 font-content">
                Swedish Meatballs &amp; Mashed Potatoes
              </p>
              <p className="font-16 font-nor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur …
              </p>
              <div className>
                <p className="font-20 font-w font-nor">Read More</p>
                <div className="line-bot" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookTable />
    </div>
  );
}

export default Blog;
