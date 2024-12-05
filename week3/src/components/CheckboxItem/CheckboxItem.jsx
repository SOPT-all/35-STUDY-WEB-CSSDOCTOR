import styles from './CheckboxItem.module.css';

const CheckboxItem = ({ label }) => (
  <label className={styles.label} htmlFor={label}>
    <input type='checkbox' id={label} />
    <div className={styles.custom_checkbox}></div>
    <span>{label}</span>
  </label>
);

export default CheckboxItem;
