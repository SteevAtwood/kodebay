import React from "react";
import styles from "./Schedule.scss";
import one from "../../Assets/one.jpg";

const Shedule: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Когда</h2>

      <div className={styles["details"]}>
        <img style={{ width: "400px" }} src={one} alt="torchlight in the sky" />

        <div className={styles["right-box"]}>
          <span className={styles["date-place-label"]}> Место проведения</span>
          <p>- Встречаемся онлайн</p>
          <p>
            - Соревнования начнутся 11 ноября в 10:00 МСК и закончатся до 13
            ноября 10:00 МСК
          </p>
          <p>- Сражение продлятся 48 часов, </p>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
