import { useState } from 'react';
import styles from './FilterSection.module.css';
import CheckboxItem from '../CheckboxItem/CheckboxItem';

const filterData = [
  { title: '성별', items: ['전체', '남성', '여성'] },
  { title: '카테고리', items: ['전체보기', '의류', '슈즈', '액세서리', '가방'] },
  { title: '브랜드', items: [] },
  { title: '색상', items: [] },
  { title: '사이즈', items: [] },
  { title: '가격', items: [] },
];

const FilterSection = () => {
  const [openSections, setOpenSections] = useState(filterData.map(() => false));

  // 섹션 토글 함수
  const toggleSection = (index) => {
    setOpenSections((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  const checkboxLabels = ['전체', '남성', '여성', '전체보기'];

  return (
    <section className={styles.filter_section}>
      {/* 배송 방법 */}
      <CheckboxItem label='국내배송' />
      <hr />

      {filterData.map((category, index) => (
        <div key={category.title}>
          <div className={styles.category_title} onClick={() => toggleSection(index)}>
            <h3>{category.title}</h3>
            <button>{openSections[index] ? '-' : '+'}</button>
          </div>
          {/* ul 태그 토글 */}
          {openSections[index] && category.items.length > 0 && (
            <ul className={styles.category_list}>
              {category.items.map((label) => (
                <li key={label}>
                  {checkboxLabels.includes(label) ? (
                    <CheckboxItem label={label} />
                  ) : (
                    <span className={styles.sub_category}>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          <hr />
        </div>
      ))}
    </section>
  );
};

export default FilterSection;
