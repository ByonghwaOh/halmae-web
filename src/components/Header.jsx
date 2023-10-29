import React from 'react';
import styles from '../styles/header.module.css';
import { Environment } from '../environment';
import { useWindowDimensions } from '../utils';

const Header = ({ viewText=true }) => {
  const today = new Date();
  const dateStr = today.toLocaleDateString().replace(/\s/g, '').slice(5, -1);
  const { height, width } = useWindowDimensions();
  const slim = width >= Environment.widthSetting['slimWidth'] ? false : true;
  const setting = Environment.widthSetting[slim ? 'slim' : 'normal'];
  const styleLogoText = slim ? styles.logo_text_slim : styles.logo_text;
  const styleHeaderText = slim ? styles.header_text_slim : styles.header_text;

  return (
    <div className={styles.header}>
      {/*<Image*/}
      <img
        className={styles.logo_icon}
        src='/assets/icons/logo.png'
        width={setting['logoWidth']}
        //height='21%'
        alt='Halmae'
      />
      <span className={styleLogoText}>카드할인 정보 ({dateStr})</span>
      <div className={styles.line}></div>
      {viewText ?
        <span className={styleHeaderText}>
          <center>쇼핑몰별로 오늘의 즉시/청구할인 정보를 보여 줍니다.</center>
          <center>(구매전 카드할인과 기준금액이 일치하는지 확인해 주세요.)<br></br></center>
        </span> : <span />}
    </div>
  );
};

export default Header;
