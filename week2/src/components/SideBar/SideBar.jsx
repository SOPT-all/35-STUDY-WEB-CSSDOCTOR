import styles from "./SideBar.module.css";
import logo from "../../assets/instagram-logo.svg";

const SideBar = () => {
  const navItems = [
    { icon: "fa-house", label: "홈" },
    { icon: "fa-magnifying-glass", label: "검색" },
    { icon: "fa-compass", label: "탐색 탭" },
    { icon: "fa-film", label: "릴스" },
    { icon: "fa-paper-plane", label: "메시지" },
    { icon: "fa-heart", label: "알림" },
    { icon: "fa-square-plus", label: "만들기" },
    { icon: "fa-user", label: "프로필" },
  ];

  const otherItems = [
    { icon: "fa-share", label: "Threads" },
    { icon: "fa-bars", label: "더보기" },
  ];

  return (
    <nav>
      <section class={styles.section}>
        <img src={logo} alt="instagram logo" class={styles.logo} />
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section class={styles.section}>
        <ul>
          {otherItems.map((item, index) => (
            <li key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default SideBar;
