function InfoRes() {
  return (
    <div>
      <h2 className="font-nor font-30 pimary-color text-center mg-t-20 pd-t-30 mg-b-40">
        About our restaurant space
      </h2>
      <div className="row">
        <div className="col-12 col-xl-6">
          <div className="pd-lr-30">
            <p
              className="font-16 font-nor mg-b-20 pd-t-30"
              data-aos="zoom-in-up"
              data-aos-duration={1500}
            >
              The round wine room of unique construction is hidden inside the
              column with the largest diameter. Inside it, around its perimeter,
              there are shelves with wine and a spiral staircase. Popular and
              more affordable wines are stored on the bottom shelves, and
              exquisite and collectible grades are on the top. The wine room
              capacity is 3500 bottles. Its full weight is more than 20 tons,
              and its height is 6 meters.
            </p>
            <div
              className="overflow-hidden"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img className src="/image-res/img2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 pd-t-30">
          <div className="pd-lr-30">
            <div
              className="overflow-hidden"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img src="/image-res/img3.svg" alt="" />
            </div>
            <p
              className="font-16 font-nor mg-t-20"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              The other round columns covered with small-scale terracotta tiles
              serve as the waiter stations. We applied the Ukrainian tradition
              of covering fireplaces and furnaces with tiles. We ordered a kind
              of traditional tile but with a slight radius in its shape from the
              local ceramic workshop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoRes;
