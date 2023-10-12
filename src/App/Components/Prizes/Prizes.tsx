import React from "react";
import styles from "./Prizes.scss";
import SVG from "react-inlinesvg";
import trophy1 from "../../Assets/trophy1.svg";
import trophy2 from "../../Assets/trophy2.svg";
import trophy3 from "../../Assets/trophy3.svg";

const Prizes: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Призы</h2>
      <div className={styles["center-box"]}>
        <div className={styles["prizeItem"]}>
          <SVG src={trophy1} className={styles["svg-style"]} />
          1-ое место: 50,000 руб, сертификат участника, мерч Codeby
        </div>
        <div className={styles["prizeItem"]}>
          <SVG src={trophy2} className={styles["svg-style"]} />
          2-ое место: 40,000 руб, сертификат участника, мерч Codeby
        </div>
        <div className={styles["prizeItem"]}>
          <SVG src={trophy3} className={styles["svg-style"]} />
          3-е место: 30,000 руб, сертификат участника, мерч Codeby
        </div>
      </div>
      <div className={styles["otherPrizeItem"]}>
        4-10 места: Электронный сертификат участника + статус Codeby Games на
        форуме
        <p className={styles.discount}>
          Скидки на курсы от Академии Кодебай для первой тройки победителей:
          50%, 40%, 30% соответственно.
        </p>
      </div>
    </div>
  );
};

export default Prizes;
