// Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  const menuItems = [
    { id: 1, text: '내 벨로그', icon: '📝' },
    { id: 2, text: '임시 글', icon: '📋' },
    { id: 3, text: '읽기 목록', icon: '📚' },
    { id: 4, text: '설정', icon: '⚙️' },
    { id: 5, text: '로그아웃', icon: '👋' },
  ];

  return (
    <div className={styles.modal}>
      {menuItems.map((item) => (
        <button key={item.id} className={styles.menuItem} onClick={onClose}>
          <span className={styles.icon}>{item.icon}</span>
          <span>{item.text}</span>
        </button>
      ))}
    </div>
  );
};

export default Modal;
