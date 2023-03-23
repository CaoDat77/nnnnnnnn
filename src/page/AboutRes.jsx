import React from "react";
import DirectionalCheff from "./directionalPage/DirectionalCheff";
import DirectionalContact from "./directionalPage/DirectionalContact";
import "../index.css";
import InfoRes from "./infoRes/InfoRes";
import InfoRes2 from "./infoRes/InfoRes2";
import Custom from "./infoRes/Custom";
import BookTable from "./directionalPage/BookTable";
import Banner from "../header/banner/Banner";

function AboutRes() {
  return (
    <div className="">
      <Banner banner="image-res/home-page.jpg" title="ABOUT RESTAURANT" />
      <div className="container color-white mg-t-80">
        <DirectionalCheff />
        <DirectionalContact />
        <InfoRes />
      </div>
      <InfoRes2 />
      <div className="container">
        <Custom />
      </div>
      <div className="color-white">
        <BookTable />
      </div>
    </div>
  );
}

export default AboutRes;
