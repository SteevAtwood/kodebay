import React from "react";
import styles from "./TargetAudience.scss";

const TargetAudience: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Для кого</h2>
      <div className={styles["center-box"]}>
        <div className={styles["details"]}>
          <ul>
            <li>- Студенты и обучающиеся</li>
            <li>- IT-специалисты и разработчики</li>
            <li>- Специалисты по информационной безопасности</li>
            <li>- Корпоративные команды безопасности</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
