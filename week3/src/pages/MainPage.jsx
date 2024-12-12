import styles from './Mainpage.module.css';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <Header />
      <Main />
    </div>
  );
}

export default MainPage;
