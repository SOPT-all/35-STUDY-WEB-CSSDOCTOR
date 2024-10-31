import Card from "./Card";
import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <main className={styles.feed_container}>
      <div className={styles.feed_category_container}>
        <ul className={styles.feed_category}>
          <li>
            <i class="fa-solid fa-arrow-trend-up"></i>트렌딩
          </li>
          <li>
            <i class="fa-regular fa-clock"></i>최신
          </li>
          <li>
            <i class="fa-solid fa-rss"></i>피드
          </li>
        </ul>

        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <ul className={styles.feed}>
        <Card />
        <Card />
        <Card />
      </ul>
    </main>
  );
};

export default Feed;
