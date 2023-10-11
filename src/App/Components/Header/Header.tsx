import React from "react";
import styles from "./Header.scss";
// import logo from "./Assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="" className={styles["logo"]} /> */}
      <div className={styles["email"]}>school@codeby.email</div>
      <div className={styles["phone"]}>
        Бесплатно по России: 8 800 444 17 50
      </div>
    </header>
  );
};

export default Header;
