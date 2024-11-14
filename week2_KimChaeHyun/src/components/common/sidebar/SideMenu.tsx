import { ReactNode } from "react";
import styles from "./SideMenu.module.css";

export interface SideMenuProps {
  icon: ReactNode;
  children: ReactNode;
  isSelected?: boolean;
  hoverIcon?: ReactNode;
}

const SideMenu = ({ icon, children, isSelected, hoverIcon }: SideMenuProps) => {
  return (
    <li className={styles.menuWrapper}>
      <div className={styles.iconWrapper}>{icon}</div>
      <span className={`${styles.label} ${isSelected ? styles.selected : ""}`}>{children}</span>
      <div className={styles.hoverIcon}>{hoverIcon}</div>
    </li>
  );
};

export default SideMenu;
