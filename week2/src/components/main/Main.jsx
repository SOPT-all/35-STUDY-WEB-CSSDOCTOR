import Feed from "../Feed/Feed";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <section className={styles.feed_section}>
        <Feed />
      </section>
    </main>
  );
};

export default Main;
