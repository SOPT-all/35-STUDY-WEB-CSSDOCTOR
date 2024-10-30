import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className={styles.logo} />
      <section>
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <button>새 글 작성</button>
        <i class="fa-solid fa-user"></i>
      </section>
    </header>
  );
};

export default Header;
