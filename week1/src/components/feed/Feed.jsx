import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Feed.module.css";
import mockData from "../../assets/data.json";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <main className={styles.feed_container}>
      <div className={styles.feed_category_container}>
        <ul className={styles.feed_category}>
          <li>
            <i className="fa-solid fa-arrow-trend-up"></i>트렌딩
          </li>
          <li>
            <i className="fa-regular fa-clock"></i>최신
          </li>
          <li>
            <i className="fa-solid fa-rss"></i>피드
          </li>
        </ul>

        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <ul className={styles.feed}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default Feed;
