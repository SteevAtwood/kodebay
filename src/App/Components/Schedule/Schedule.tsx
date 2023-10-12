import React from "react";
import styles from "./Schedule.scss";
import SVG from "react-inlinesvg";
import spartan from "../../Assets/imgLeft.svg";

const Shedule: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Когда</h2>

      <div className={styles["details"]}>
        <div className={styles["left-box"]}>
          <div className={styles["svg-container"]}>
            <SVG src={spartan} className={styles["svg-image"]} />
          </div>
        </div>
        <div className={styles["right-box"]}>
          <span className={styles["date-place-label"]}>Встречаемчя онлайн</span>
          <p>- Битва онлайн</p>
          <p>- Соревнования начнутся 11 ноября в 10:00 МСК</p>
          <p>- Сражения продлятся 48 часов, до 13 ноября 10:00 МСК</p>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
