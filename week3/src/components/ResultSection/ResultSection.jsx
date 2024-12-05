import styles from './ResultSection.module.css';
import dropdown from '../../assets/icon_dropdown_list.svg';
import ProductCard from '../ProductCard/ProductCard';

const ResultSection = () => {
  return (
    <section>
      <div className={styles.result_header}>
        <span>75,264개의 결과</span>
        <div className={styles.sub_filter_container}>
          <div className={styles.sub_filter}>
            <span>인기순</span>
            <img src={dropdown} alt='dropdown' />
          </div>
          <div className={styles.sub_filter}>
            <span>이미지 크기</span>
            <img src={dropdown} alt='dropdown' />
          </div>
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
