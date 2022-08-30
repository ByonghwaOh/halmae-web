import React from 'react';
import styles from '../styles/header.module.css';
import { Environment } from '../environment';
import { useWindowDimensions } from '../utils';
import Image from 'next/image';

const Header = ({ viewText=true }) => {
  const today = new Date();
  const dateStr = today.toLocaleDateString().replace(/\s/g, '').slice(5, -1);
  const { height, width } = useWindowDimensions();
  const slim = width >= Environment.widthSetting['slimWidth'] ? false : true;
  const setting = Environment.widthSetting[slim ? 'slim' : 'normal'];
  const styleLogoText = slim ? styles.logo_text_slim : styles.logo_text;
  const styleHeaderText = slim ? styles.header_text_slim : styles.header_text;
  console.log(slim, width, styleLogoText, styleHeaderText);
  console.log(styles.logo_text_slim, styles.header_text_slim);

  return (
    <div className={styles.header}>
      {/*<Image
        className={styles.logo_icon}
        src='/assets/icons/logo.png'
        width={setting['logoWidth']}
        height='21%'
        alt='Halmae'
  />*/}
      <span className={styleLogoText}>카드할인 정보 ({dateStr})</span>
      <div className={styles.line}></div>
      {viewText ?
        <span className={styleHeaderText}>
         <center>쇼핑몰별로 오늘의 즉시/청구할인 정보를 보여 줍니다.</center>
         <center>(구매전 카드할인이 일치하는지 확인하시기 바랍니다.)</center>
        </span> : <span />}
    </div>
  );
};

export default Header;
