import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HomeTab.module.css';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import TabModal from '../tabModal/TabModal';

function HomeTab() {
  const [timeModalOpen, setTimeModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('trending'); // 기본값을 trending으로 설정

  const handleTimeClick = () => {
    setTimeModalOpen(!timeModalOpen);
    setSettingsModalOpen(false);
  };

  const handleSettingsClick = () => {
    setSettingsModalOpen(!settingsModalOpen);
    setTimeModalOpen(false);
  };

  const handleCloseModals = () => {
    setTimeModalOpen(false);
    setSettingsModalOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.tab__section}>
      <div className={styles.tab__left}>
        <span
          className={`${styles.left__item} ${
            activeTab === 'trending' ? styles.active : ''
          }`}
          onClick={() => handleTabClick('trending')}
        >
          ↗트렌딩
        </span>
        <span
          className={`${styles.left__item} ${
            activeTab === 'recent' ? styles.active : ''
          }`}
          onClick={() => handleTabClick('recent')}
        >
          🕓 최신
        </span>
        <span
          className={`${styles.left__item} ${
            activeTab === 'feed' ? styles.active : ''
          }`}
          onClick={() => handleTabClick('feed')}
        >
          📶 피드
        </span>
      </div>
      <div className={styles.tab__right}>
        <div className={styles.button__wrapper}>
          <button className={styles.right__button} onClick={handleTimeClick}>
            이번 주<span className={styles.right__triangle}></span>
          </button>
          {timeModalOpen && (
            <TabModal type="time" onClose={handleCloseModals} />
          )}
        </div>
        <div className={styles.icon__wrapper}>
          <FontAwesomeIcon
            icon={faEllipsisV}
            className={styles.right__icon}
            onClick={handleSettingsClick}
          />
          {settingsModalOpen && (
            <TabModal type="settings" onClose={handleCloseModals} />
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeTab;
