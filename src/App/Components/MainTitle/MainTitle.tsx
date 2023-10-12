import React from "react";
import styles from "./MainTitle.scss";
import SVG from "react-inlinesvg";
import colosseum from "../../Assets/colosseum.svg";

const MainTitle: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>Киберколизей</h1>
        <h2 className={styles["subtitle"]}>
          Присоединяйтесь к международным CTF-соревнованиям по
          кибербезопасности!
        </h2>
      </div>
      <div className={styles["imageContainer"]}>
        <SVG src={colosseum} className={styles["svgImage"]} />
        {/* Здесь будет таймер */}
        <div className={styles["timer"]}>Таймер</div>
      </div>
    </div>
  );
};

export default MainTitle;
