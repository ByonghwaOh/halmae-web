import React from "react";
import styles from "../assets/styles/header.module.css";

const Header = () => {
  const today = new Date();
  const dateStr = today.toLocaleDateString().replace(/\s/g, "").slice(5);

  return (
    <div className={styles.header}>
      <img
        className={styles.logo_icon}
        src={require("../assets/icons/logo.png")}
        width="90"
        alt="Halmae"
      />
      <span className={styles.logo_text}>카드할인 정보 ({dateStr})</span>
      <div className={styles.line}></div>
      <span><center>쇼핑몰별로 오늘의 즉시/청구할인 정보를 보여 줍니다.</center></span>
    </div>
  );
};

export default Header;
