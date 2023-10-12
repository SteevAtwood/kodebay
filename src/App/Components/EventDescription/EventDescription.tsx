import React from "react";
import styles from "./EventDescription.scss";
import two from "../../Assets/two.jpg";

const EventDescription: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Описание мероприятия</h2>
      <div className={styles["details"]}>
        <div className={styles["left-box"]}>
          Киберколизей - международные, командные соревнования на захват флага
          по кибербезопасности. В команде может быть до 5 человек. Формат:
          Jeopardy (Classic). Соревнования проходят в онлайн-формате.
        </div>
        <img style={{ width: "400px" }} src={two} alt="torchlight in the sky" />
      </div>
    </div>
  );
};

export default EventDescription;
