import { useState } from 'react';
import styles from './Dropdown.module.css';
import dropdown from '../../assets/icon_dropdown_list.svg';

const FilterDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.sub_filter}>
      <span onClick={toggleDropdown}>{selectedOption}</span>
      <img src={dropdown} alt='dropdown' onClick={toggleDropdown} />
      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdown_item}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
