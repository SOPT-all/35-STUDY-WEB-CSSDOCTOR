import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import HeaderDropDown from "./HeaderMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
          <i class="fa-solid fa-caret-down" onClick={toggleMenu}></i>
          {isMenuOpen && <HeaderDropDown />}
        </section>
      </header>
    </>
  );
};

export default Header;
