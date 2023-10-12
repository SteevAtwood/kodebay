import React from "react";
import styles from "./EventDescription.scss";

const EventDescription: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Описание мероприятия</h2>
      <div className={styles["details"]}>
        <div className={styles["left-box"]}>
          Киберколизей - международные, командные соревнования на захват флага
          по кибербезопасности.
        </div>
        <div className={styles["right-box"]}>
          В команде может быть до 5 человек. Формат: Jeopardy (Classic).
          Соревнования проходят в онлайн-формате.
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
