import React from "react";
import styles from "./TargetAudience.scss";
import SVG from "react-inlinesvg";
import student from "../../Assets/student.svg";
import programmer from "../../Assets/programmer.svg";
import hacker from "../../Assets/hacker.svg";
import team from "../../Assets/team.svg";

const TargetAudience: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Для кого</h2>
      <div className={styles["center-box"]}>
        <div className={styles["details"]}>
          <ul className={styles["target-audience-list"]}>
            <li>
              <SVG src={student} className={styles["icon"]} /> Студенты и
              обучающиеся
            </li>
            <li>
              <SVG src={programmer} className={styles["icon"]} /> IT-специалисты
              и разработчики
            </li>
            <li>
              <SVG src={hacker} className={styles["icon"]} /> Специалисты по
              информационной безопасности
            </li>
            <li>
              <SVG src={team} className={styles["icon"]} /> Корпоративные
              команды безопасности
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
