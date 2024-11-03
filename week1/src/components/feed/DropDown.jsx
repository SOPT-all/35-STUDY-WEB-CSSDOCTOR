import styles from "./DropDown.module.css";

const DropDown = ({ options, handleSelect, selectedOption }) => {
  return (
    <ul className={styles.dropdown}>
      {options.map((option) => (
        <li
          key={option}
          onClick={() => handleSelect(option)}
          className={selectedOption === option && styles.selected}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
