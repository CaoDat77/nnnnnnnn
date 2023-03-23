import React from "react";
import DirectionalCheff from "./directionalPage/DirectionalCheff";
import DirectionalContact from "./directionalPage/DirectionalContact";
import DirectionalRes from "./directionalPage/DirectionalRes";
import MenuHome from "./menuHome/MenuHome";
import BookTable from "./directionalPage/BookTable";
import Banner from "../header/banner/Banner";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="color-white ">
      <Banner banner="image-home/home-page.jpg" title="WELLCOME TO TERRA" />
      <div className="container mg-t-80 ">
        <DirectionalRes />
        <MenuHome />
        <DirectionalCheff />
        <DirectionalContact />
      </div>
      <BookTable />
    </div>
  );
}

export default Home;
