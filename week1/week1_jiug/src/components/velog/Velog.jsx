import React from 'react';
import styles from './Velog.module.css';
import Header from '../header/Header';
import HomeTab from '../homeTab/HomeTab';

function Velog() {
  return (
    <div className={styles.velogContainer}>
      <Header />
      <HomeTab />
    </div>
  );
}

export default Velog;
