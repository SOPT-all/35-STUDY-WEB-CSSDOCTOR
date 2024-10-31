// TabModal.jsx
import React from 'react';
import styles from './TabModal.module.css';

const TabModal = ({ type, onClose }) => {
  const timeMenuItems = [
    { id: 1, text: '오늘' },
    { id: 2, text: '이번 주' },
    { id: 3, text: '이번 달' },
    { id: 4, text: '올해' },
  ];

  const settingsMenuItems = [
    { id: 1, text: '공지사항' },
    { id: 2, text: '태그 목록' },
    { id: 3, text: '서비스 정책' },
    { id: 4, text: 'Slack' },
    { id: 5, text: '문의\ncontact@velog.io' },
  ];

  const items = type === 'time' ? timeMenuItems : settingsMenuItems;

  return (
    <div className={styles.modal}>
      {items.map((item) => (
        <button
          key={item.id}
          className={`${styles.menuItem} ${
            item.id === 5 ? styles.contactItem : ''
          }`}
          onClick={onClose}
        >
          <span>{item.text}</span>
        </button>
      ))}
    </div>
  );
};

export default TabModal;
