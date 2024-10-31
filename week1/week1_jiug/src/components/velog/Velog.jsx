import React from 'react';
import styles from './Velog.module.css';
import Header from '../header/Header';
import HomeTab from '../homeTab/HomeTab';
import Main from '../main/Main';

function Velog() {
  return (
    <div className={styles.velogContainer}>
      <Header />
      <HomeTab />
      <Main />
    </div>
  );
}

export default Velog;
