import React , { useState } from 'react';
import styles from './Header.module.css';
import  { Logo, Notification, Search, Toggle }  from '@assets/svgs';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleClick = () => {
    console.log("토글오픈");
    setIsDropdownOpen(!isDropdownOpen);
  };
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
            <Toggle  className={styles.ToggleIcon}  onClick={handleToggleClick}/>
            {isDropdownOpen && (
            <div className={styles.DropdownMenu}>
              <div>내 벨로그</div>
              <div>임시 글</div>
              <div>읽기 목록</div>
              <div>설정</div>
              <div>로그아웃</div>
            </div>
          )}
        </div>
        </div>
    </div>
  )
}

export default Header