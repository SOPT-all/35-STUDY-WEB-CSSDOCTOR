import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faMagnifyingGlass,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import Modal from '../modal/Modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTriangleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.header__section}>
      <div className={styles.header__left}>
        <h2>velog</h2>
      </div>
      <div className={styles.header__right}>
        <FontAwesomeIcon icon={faBell} className={styles.header__icon} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.header__icon}
        />
        <button className={styles.header__btn}>새 글 작성</button>
        <img
          src="/assets/profile.jpg"
          alt="Profile"
          className={styles.header__profile}
        />{' '}
        <span
          className={styles.header__triangle}
          onClick={handleTriangleClick}
        ></span>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default Header;
