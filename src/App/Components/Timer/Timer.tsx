import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import timer from "../../../Assets/timer.svg";
import styles from "./Timer.scss";

type TimerProps = {
  leftTime: number;
};

export const Timer = (props: TimerProps) => {
  const [remainingTime, setRemainingTime] = useState(props.leftTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevRemainingTime) =>
          prevRemainingTime !== null ? prevRemainingTime - 1 : 0
        );
      }
    }, 1000);

    return () => clearTimeout(interval);
  });

  useEffect(() => {
    setRemainingTime(props.leftTime || 0);
  }, [props.leftTime]);

  const formatTime = (time: number) => {
    if (time <= 0) {
      return "00:00:00";
    }
    const intTime = Math.floor(time);
    const seconds = String(intTime % 60).padStart(2, "0");
    const minutes = String(Math.floor((intTime / 60) % 60)).padStart(2, "0");
    const hours = String(Math.floor(intTime / 3600) % 24).padStart(2, "0");
    const days = String(Math.floor(intTime / 86400)).padStart(2, "0");

    return [days, hours, minutes, seconds];
  };

  return (
    <div className={styles["timer"]}>
      <SVG src={timer} className={styles["red-svg"]} />
      <p>{formatTime(remainingTime)[0]}</p>
      <p>{formatTime(remainingTime)[1]}</p>
      <p>{formatTime(remainingTime)[2]}</p>
      <p>{formatTime(remainingTime)[3]}</p>
    </div>
  );
};
