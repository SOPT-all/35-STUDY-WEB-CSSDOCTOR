import { Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Header from "@components/header/Header";
import FilterTab from "@components/tab/FiterTab";

const Layout = () => {
  return (
    <div className={styles.LayoutContainer}>
      <Header />
      <FilterTab />
      <Outlet />
    </div>
  );
};

export default Layout;
