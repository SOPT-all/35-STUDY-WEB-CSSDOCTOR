import styles from "./Content.module.css";
import Sidebar from "./Sidebar";
import Product from "./product/Product";

const Content = () => {
  return (
    <>
      <h1 className={styles.title}>전체</h1>
      <div className={styles.container}>
        <Sidebar />
        <Product />
      </div>
    </>
  );
};

export default Content;
