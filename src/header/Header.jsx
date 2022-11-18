import Banner from "./banner/Banner";
import Nav from "./nav/Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.banner}>
      <Nav />
      <Banner  />
    </div>
  );
}

export default Header;
