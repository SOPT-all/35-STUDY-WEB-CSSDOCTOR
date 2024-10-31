import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={handleToggle} className={styles.dropdownButton}>
        이번 주 <span className={styles.arrow}>▼</span>
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem}>오늘</div>
          <div className={styles.dropdownItem}>이번 주</div>
          <div className={styles.dropdownItem}>이번 달</div>
          <div className={styles.dropdownItem}>올해</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
