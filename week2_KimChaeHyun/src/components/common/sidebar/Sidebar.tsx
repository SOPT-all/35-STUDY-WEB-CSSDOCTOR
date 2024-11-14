import styles from "./Sidebar.module.css";
import SideMenu from "./SideMenu";
import { menuItems } from "@components/common/sidebar/constants/menuItems";
import { IcTextlogo } from "@assets/svgs";
import { useState } from "react";
import { footerMenuItems } from "@components/common/sidebar/constants/footerMenuItems";

const Sidebar = () => {
  const [selected] = useState(0);

  return (
    <aside className={styles.sidebarContainer}>
      <div>
        <IcTextlogo className={styles.logo} />
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <SideMenu key={index} icon={item.icon} isSelected={selected === index}>
              {item.label}
            </SideMenu>
          ))}
        </ul>
      </div>
      <ul className={styles.menuList}>
        {footerMenuItems.map((item, index) => (
          <SideMenu key={index} icon={item.icon} hoverIcon={item.hoverIcon}>
            {item.label}
          </SideMenu>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
