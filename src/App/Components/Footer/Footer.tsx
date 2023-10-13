import React from "react";
import styles from "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["container"]}>
        <div className={styles["about"]}>
          <h4>О компании</h4>
          <p>Codeby — международные CTF-соревнования по кибербезопасности.</p>
        </div>
        <div className={styles["links"]}>
          <h4>Полезные ссылки</h4>
          <ul>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Условия использования</a>
            </li>
          </ul>
        </div>
        <div className={styles["social"]}>
          <h4>Мы в социальных сетях</h4>
          <ul>
            <li>
              <a href="#">Форум Codeby</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Codeby School</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["copy"]}>© 2023 Codeby. Все права защищены.</div>
    </div>
  );
};

export default Footer;
