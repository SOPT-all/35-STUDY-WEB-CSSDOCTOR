// IconBtn.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconBtn.module.css';

const IconBtn = ({ icon: Icon, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <div className={styles.circle}></div>
            <Icon className={styles.icon} /> {/* 전달받은 FontAwesome 아이콘 사용 */}
        </a>
    );
};

// prop-types로 props 검증 추가
IconBtn.propTypes = {
    icon: PropTypes.elementType.isRequired, // icon prop을 React 컴포넌트로 기대
    link: PropTypes.string.isRequired       // link prop은 문자열로 기대
    };

export default IconBtn;
