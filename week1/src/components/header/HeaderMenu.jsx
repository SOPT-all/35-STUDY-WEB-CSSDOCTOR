import styles from "./Header.module.css";

const HeaderMenu = () => {
  const options = ["내 벨로그", "새 글 작성", "임시 글", "읽기 목록", "설정", "로그아웃"];

  return (
    <ul className={styles.menu}>
      {options.map((option) => (
        <li key={option}>{option}</li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
