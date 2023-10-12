import React from "react";
import styles from "./EventDetails.scss";

const EventDetails: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Дата и место проведения</h2>
      <div className={styles["details"]}>
        <div className={styles["left-box"]}>
          <span className={styles["date-place-label"]}>Дата:</span>
          <br />
          <br /> - 11 ноября, 10:00 МСК
        </div>
        <div className={styles["right-box"]}>
          <span className={styles["date-place-label"]}>Место проведения:</span>
          <br />
          <br /> - Онлайн на платформе Codeby Games
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
