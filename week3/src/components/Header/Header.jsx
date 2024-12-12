import styles from './Header.module.css';
import logo from '../../assets/new_jente_logo.svg';

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} alt='logo' />
      </h1>

      <nav>
        <ul>
          <li>여성</li>
          <li>남성</li>
          <li>브랜드</li>
        </ul>
        <ul>
          <li>검색</li>
          <li>위시리스트</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
