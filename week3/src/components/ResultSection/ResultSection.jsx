import styles from './ResultSection.module.css';
import ProductCard from '../ProductCard/ProductCard';
import FilterDropdown from '../Dropdown/Dropdown';

const ResultSection = () => {
  const popularOptions = ['인기순', '최신순', '가격 높은 순', '가격 낮은 순'];
  const imageSizeOptions = ['원본', '중간', '작게'];

  return (
    <section>
      <div className={styles.result_header}>
        <span>75,264개의 결과</span>
        <div className={styles.sub_filter_container}>
          <FilterDropdown label='인기순' options={popularOptions} />
          <FilterDropdown label='이미지 크기' options={imageSizeOptions} />
        </div>
      </div>

      <ul className={styles.result_grid}>
        {Array(20)
          .fill()
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </ul>
    </section>
  );
};

export default ResultSection;
