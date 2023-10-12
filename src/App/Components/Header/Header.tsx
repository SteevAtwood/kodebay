import React from "react";
import styles from "./Header.scss";
import SVG from "react-inlinesvg";
import logo from "../../Assets/logo2.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SVG src={logo} className={styles["logo"]} />
        <div className={styles["middle"]}>
          <div className={styles["email"]}>school@codeby.email</div>
          <div className={styles["phone"]}>
            Бесплатно по России: 8 800 444 17 50
          </div>
        </div>
        <div className={styles["cta-button"]}>Записаться на курс</div>
      </header>
    </div>
  );
};

export default Header;
