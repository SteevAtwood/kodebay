import React, { useState, useEffect } from "react";
import styles from "./MainTitle.scss";
import { Timer } from "../Timer/Timer";
import main from "../../Assets/main.jpg";

const MainTitle: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const targetDate = new Date("November 11, 2023 9:00:00");
    if (now > targetDate) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const timeDifference = targetDate.getTime() - now.getTime();
    return timeDifference / 1000;
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>Киберколизей</h1>
        <h2 className={styles["subtitle"]}>
          Присоединяйтесь к международным CTF-соревнованиям по
          кибербезопасности!
        </h2>
        <Timer leftTime={timeRemaining} />
      </div>
      <div className={styles["imageContainer"]}>
        <img
          style={{ width: "400px" }}
          src={main}
          alt="torchlight in the sky"
        />
      </div>
    </div>
  );
};

export default MainTitle;
