import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FilterTab.module.css';
import { IcTrend, IcRec, IcFeed, IcMore } from "@assets/svgs";
import DropdownMenu from '@components/dropdownMenu/DropdownMenu';

const tabs = [
  { id: 1, label: '트렌딩', icon: <IcTrend />, path: '/trending/week' },
  { id: 2, label: '최신', icon: <IcRec />, path: '/recent' },
  { id: 3, label: '피드', icon: <IcFeed />, path: '/feed' },
];

const FilterTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tabItem} ${
              activeTab === tab.id ? styles.active : ''
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <span className={styles.icon}>{tab.icon}</span>
            <span className={styles.label}>{tab.label}</span>
          </div>
        ))}
         <div 
        className={styles.tabIndicator} 
        style={{ transform: `translateX(${(activeTab - 1) * 100}%)` }}
      />
      </div>

      <div className={styles.moreButton}>
        <DropdownMenu />
        <IcMore className={styles.icon} onClick={handleToggle}/>
        {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem}>공지사항</div>
          <div className={styles.dropdownItem}>태그 목록</div>
          <div className={styles.dropdownItem}>서비스 정책</div>
          <div className={styles.dropdownItem}>Slack</div>
          <div className={styles.dropdownItems}>
            <div>문의</div>
            <div>contact@velog.io</div>
          </div>
          <div className={styles.dropdownImg}>
            <img src='https://graphcdn.io/badge.svg' />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default FilterTab;
