import React, { useState, useEffect } from "react";
import styles from "./MainTitle.scss";
import SVG from "react-inlinesvg";
import colosseum from "../../Assets/colosseum.svg";
import { Timer } from "../Timer/Timer";

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
      </div>
      <div className={styles["imageContainer"]}>
        <Timer leftTime={timeRemaining} />
        <SVG src={colosseum} className={styles["svgImage"]} />
      </div>
    </div>
  );
};

export default MainTitle;
