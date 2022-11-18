import "./Contact.css"

function FormContact() {
  return (
    <div className="">
      <div className="container mg-t-80 color-white">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="pd-lr-20 mg-b-20">
              <div className="mg-b-20">
                <h3 className="font-nor font-20 pimary-color font-w">
                  GET IN TOUCH
                </h3>
                <h1 className="font-50 font-content">CONTACT US</h1>
              </div>
              <div className="font-20 font-nor mg-b-20">
                <p>
                  For general enquiries please email: <b>info@patiotime.com</b>
                </p>
                <p>
                  Reserve by email: <b>booking@patiotime.com</b>
                </p>
                <p>
                  Tel: <b>+39 055 1234567T</b>
                </p>
              </div>
              <div className="font-20 font-nor">
                <p>Opening hours:</p>
                <p>Mon – Thu: 10.00 am – 01:00 am</p>
                <p>Fri – Sun: 10:00 am – 02:00 am</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 pd-t-20">
            <form action className="pd-lr-20">
              <div className="row mg-b-20">
                <div className="col-xl-6 col-6 font-20 font-nor">
                  <label htmlFor="name">Your name</label>
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-xl-6 col-6 font-20 font-nor">
                  <label htmlFor="email">Your email</label>
                  <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="font-20 font-nor mg-t-20">
                <label htmlFor="subject"> Subject </label>
                <input
                  className="input"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                />
              </div>
              <div className="mg-t-20 font-20 font-nor">
                <label htmlFor="message">Your message (optional)</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  defaultValue={""}
                />
              </div>
              <div className="mg-t-20">
                <button className="set-btn">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
