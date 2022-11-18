import React from "react";
import Contact from "./contact/Contact";
import FormContact from "./contact/FormContact";
import BookTable from "./directionalPage/BookTable";

function ContactPage() {
  return (
    <div className="">
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
