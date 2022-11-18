import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="container mg-t-80 color-white">
      <div className="row align-items-center">
        <div className="col-xl-6 col-sm-12">
          <div className="pd-lr-20">
            <h3 className="font-nor font-20 pimary-color font-w mg-b-20">
              OUR LOCATION
            </h3>
            <h1 className="font-50 font-content mg-b-20">WHERE TO FIND US</h1>
            <p className="font-16 font-nor mg-b-20">
              The Terra restaurant is located on Silk Street, in the heart of
              London city, on the edge of Soho. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec.
            </p>
            <p className="font-16 font-nor mg-b-20 pd-t-20">
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu.
            </p>
            <p className="font-20 font-nor font-w mg-b-20">
              <i className="bx bx-location-plus" />
              Silk St, Barbican, London EC2Y 8DS, UK
            </p>
            <p className="font-20 font-nor font-w mg-b-20">
              <i className="bx bx-phone" /> +39-055-123456
            </p>
            <p className="font-20 font-nor font-w mg-b-20">
              <i className="bx bx-envelope" /> booking@patiotime.com
            </p>
            <button className="set-btn">
              <NavLink
                className="pimary-color"
                to="https://goo.gl/maps/Ac4jxtSTAXpNGmpt8"
              >
                VIEW IN GOOGLE MAPS
              </NavLink>
            </button>
          </div>
        </div>
        <div className="col-xl-6 d-flex justify-content-end">
          <div className="overflow-hidden none" style={{ width: "80%" }}>
            <img src="/image-contact/contact_img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
