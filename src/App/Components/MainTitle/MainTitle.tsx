import React, { useState, useEffect } from "react";
import styles from "./MainTitle.scss";
import SVG from "react-inlinesvg";
import colosseum from "../../Assets/colosseum.svg";

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
    const targetDate = new Date(now.getFullYear(), 9, 12, 22, 0, 0);

    if (now > targetDate) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${days}д : ${hours}ч : ${minutes}м`;
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
        <SVG src={colosseum} className={styles["svgImage"]} />
        <div className={styles["timer"]}>{timeRemaining}</div>
      </div>
    </div>
  );
};

export default MainTitle;
