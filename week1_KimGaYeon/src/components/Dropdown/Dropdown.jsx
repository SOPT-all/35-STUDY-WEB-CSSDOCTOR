import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

function Dropdown({ options }) {
  return (
    <div className={styles.dropdownList}>
      {options.map((option, index) => (
        <div key={index} className={styles.dropdownItem}>
          {option}
        </div>
      ))}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
