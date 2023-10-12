import React from "react";
import styles from "./ContactInfo.scss";

const ContactInfo: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Как и где искать команду</h2>
      <div className={styles["center-box"]}>
        <p>Телеграм</p>
        <p>Дискорд</p>
        <p>Форум Codeby Games</p>
      </div>
    </div>
  );
};

export default ContactInfo;
