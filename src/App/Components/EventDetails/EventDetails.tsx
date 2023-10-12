import React from "react";
import styles from "./EventDetails.scss";

const EventDetails: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Дата и место проведения</h2>
      <div className={styles["details"]}>
        <div className={styles["left-box"]}>
          <span>Дата: 11 ноября, 10:00 МСК</span>
        </div>
        <div className={styles["right-box"]}>
          <span>Место проведения: Онлайн на платформе Codeby Games</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
