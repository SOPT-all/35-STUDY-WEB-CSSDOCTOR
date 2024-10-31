import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FilterTab.module.css';
import { IcTrend, IcRec, IcFeed, IcMore } from "@assets/svgs";

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
        <IcMore className={styles.icon} />
      </div>
    </div>
  );
};

export default FilterTab;
