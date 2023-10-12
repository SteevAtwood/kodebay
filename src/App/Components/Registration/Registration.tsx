import React from "react";
import styles from "./Registration.scss";

const Registration: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Регистрация</h2>
      <div className={styles["center-box"]}>
        <div className={styles["details"]}>
          <p>
            Переходи на Codeby Games, выбирай вкладку &apos;Киберколизей&apos; и
            регистрируй свою команду. Ждём тебя на старте!
          </p>

          <button className={styles["cta-button"]}>
            Зарегистрироваться сейчас!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
