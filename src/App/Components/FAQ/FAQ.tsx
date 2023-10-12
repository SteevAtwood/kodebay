import React, { useState } from "react";
import styles from "./FAQ.scss";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles["center-box"]}>
      <h2 className={styles["heading"]}>FAQ</h2>
      <div
        className={styles["question"]}
        onClick={() => setOpenIndex(openIndex !== 1 ? 1 : null)}
      >
        Вопрос 1{openIndex === 1 && <p className={styles["answer"]}>Ответ 1</p>}
      </div>
      <div
        className={styles["question"]}
        onClick={() => setOpenIndex(openIndex !== 2 ? 2 : null)}
      >
        Вопрос 2{openIndex === 2 && <p className={styles["answer"]}>Ответ 2</p>}
      </div>
      <div
        className={styles["question"]}
        onClick={() => setOpenIndex(openIndex !== 3 ? 3 : null)}
      >
        Вопрос 3{openIndex === 3 && <p className={styles["answer"]}>Ответ 3</p>}
      </div>
      <div
        className={styles["question"]}
        onClick={() => setOpenIndex(openIndex !== 4 ? 4 : null)}
      >
        Вопрос 4{openIndex === 4 && <p className={styles["answer"]}>Ответ 4</p>}
      </div>
    </div>
  );
};

export default FAQ;
