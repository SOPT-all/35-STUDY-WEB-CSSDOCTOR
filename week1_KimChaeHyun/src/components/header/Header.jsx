import React from 'react';
import styles from './Header.module.css';
import  { Logo, Notification, Search, Toggle }  from '@assets/svgs';

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
        <Logo />
        <div className={styles.HeaderBtnWrapper}>
        <Notification className={styles.HeaderIcon}/>
        <Search className={styles.HeaderIcon}/>
        <button className={styles.WriteBtn}>
            새 글 작성
        </button>
        <div className={styles.ProfileWrapper}>
            <img src='https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg' className={styles.ProfileIcon}/>
            <Toggle  className={styles.ToggleIcon}/>
        </div>
        </div>
    </div>
  )
}

export default Header