import PropTypes from 'prop-types';
import styles from './TabBtn.module.css';

const TabBtn = ({ icon: Icon, text, isActive, link }) => {
return (
    <a
      className={`${styles.tabBtn} ${isActive ? styles.active : ''}`}
      href={link}
    >
      <Icon className={styles.icon} /> 
      <span className={styles.text}>{text}</span>
    </a>
  );
};

TabBtn.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  link: PropTypes.string.isRequired,
};

TabBtn.defaultProps = {
  isActive: false,
};

export default TabBtn;
