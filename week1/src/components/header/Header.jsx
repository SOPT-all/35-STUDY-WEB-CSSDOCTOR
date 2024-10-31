import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" class={styles.logo} />
      <section>
        <div class={styles.icon}>
          <i class="fa-regular fa-bell"></i>
        </div>
        <div class={styles.icon}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button>새 글 작성</button>
        <i class="fa-solid fa-user"></i>
      </section>
    </header>
  );
};

export default Header;
