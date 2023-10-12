import React from "react";
import styles from "./ContactInfo.scss";
import SVG from "react-inlinesvg";
import telegramIcon from "../../Assets/telegram.svg";
import discordIcon from "../../Assets/discord.svg";
import forumIcon from "../../Assets/codeby_link.svg";

const ContactInfo: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Как и где искать команду</h2>
      <div className={styles["center-box"]}>
        <div className={styles["icon-box"]}>
          <SVG src={telegramIcon} className={styles["svg-image"]} />
        </div>
        <div className={styles["icon-box"]}>
          <SVG src={discordIcon} className={styles["svg-image"]} />
        </div>
        <div className={styles["icon-box"]}>
          <SVG src={forumIcon} className={styles["svg-image"]} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
