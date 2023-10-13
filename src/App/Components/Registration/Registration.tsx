import React from "react";
import styles from "./Registration.scss";

const Registration: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Регистрация</h2>
      <div className={styles["center-box"]}>
        <div className={styles["details"]}>
          <div className={styles["text-container"]}>
            <p> - Переходи на Codeby Games</p>
            <p> - Выбирай вкладку &apos;Киберколизей&apos; </p>
            <p> - Регистрируй свою команду </p>
            <p className={styles["date-place-label"]}>Ждём тебя на старте!</p>
          </div>
          <div className={styles["button-container"]}>
            <button className={styles["cta-button"]}>
              Зарегистрироваться сейчас!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
