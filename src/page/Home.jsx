import React from "react";
import DirectionalCheff from "./directionalPage/DirectionalCheff";
import DirectionalContact from "./directionalPage/DirectionalContact";
import DirectionalRes from "./directionalPage/DirectionalRes";
import MenuHome from "./menuHome/MenuHome";
import BookTable from "./directionalPage/BookTable";

function Home() {
  return (
    <div className="color-white">
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
