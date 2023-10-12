import React from "react";
import styles from "./Schedule.scss";

const Shedule: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Расписание</h2>
      <div className={styles["center-box"]}>
        <div className={styles["details"]}>
          <p>
            Соревнования начнутся 11 ноября в 10:00 МСК и продлятся 48 часов, до
            13 ноября 10:00 МСК.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
