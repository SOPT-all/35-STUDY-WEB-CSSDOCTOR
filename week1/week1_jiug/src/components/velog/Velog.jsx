import React from 'react';
import styles from './Velog.module.css';
import Header from '../header/Header';

function Velog() {
  return (
    <div className={styles.velogContainer}>
      <Header />
    </div>
  );
}

export default Velog;
