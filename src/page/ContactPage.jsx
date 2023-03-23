import React from "react";
import Banner from "../header/banner/Banner";
import Contact from "./contact/Contact";
import FormContact from "./contact/FormContact";
import BookTable from "./directionalPage/BookTable";

function ContactPage() {
  return (
    <div className="">
      <Banner banner="image-contact/home-page.jpg" title="CONTACT" />
      <div className="">
        <Contact />
        <FormContact />
      </div>
      <div className="color-white">
        <BookTable />
      </div>
    </div>
  );
}

export default ContactPage;
