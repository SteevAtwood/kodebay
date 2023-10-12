import React from "react";
import styles from "./Prizes.scss";

const Prizes: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Призы</h2>
      <div className={styles["center-box"]}>
        <div className={styles["prizeItem"]}>
          1-ое место: 50,000 руб, сертификат участника, мерч Codeby
        </div>
        <div className={styles["prizeItem"]}>
          2-ое место: 40,000 руб, сертификат участника, мерч Codeby
        </div>
        <div className={styles["prizeItem"]}>
          3-е место: 30,000 руб, сертификат участника, мерч Codeby
        </div>
        <div className={styles["prizeItem"]}>
          4-10 места: Электронный сертификат участника + статус Codeby Games на
          форуме
        </div>
        <div className={styles.discount}>
          Скидки на курсы от Академии Кодебай для первой тройки победителей:
          50%, 40%, 30% соответственно.
        </div>
      </div>
    </div>
  );
};

export default Prizes;
