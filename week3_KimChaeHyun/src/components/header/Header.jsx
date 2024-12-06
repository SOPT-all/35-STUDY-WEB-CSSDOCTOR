import styles from "./Header.module.css";
import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "../../constants/navList";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://cdn.jentestore.io/resource/icon/new_jente_logo.svg" />
      </div>
      <nav className={styles.nav}>
        <ul>
          {LEFT_NAV_ITEMS.map((item, index) => (
            <li key={`contentTab-${index}`}>{item}</li>
          ))}
        </ul>
        <ul>
          {RIGHT_NAV_ITEMS.map((item, index) => (
            <li key={`userTab-${index}`}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
