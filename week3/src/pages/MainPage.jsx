import styles from './Mainpage.module.css';
import Header from '../components/Header/Header';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}

export default MainPage;
