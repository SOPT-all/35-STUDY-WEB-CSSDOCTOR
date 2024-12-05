import styles from './Main.module.css';
import FilterSection from '../FilterSection/FilterSection';
import ResultSection from '../ResultSection/ResultSection';

const Main = () => {
  return (
    <main>
      <h2>남성</h2>
      <div className={styles.section_wrapper}>
        <FilterSection />
        <ResultSection />
      </div>
    </main>
  );
};

export default Main;
