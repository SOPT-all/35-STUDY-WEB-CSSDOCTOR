import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import Feed from "../Feed/Feed";
import mockData from "../../data/feedData.json";
import Story from "../story/Story";

const Main = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    setFeedData(mockData);
  }, []);

  return (
    <main>
      <section className={styles.feed_section}>
        <Story />
        {feedData.map((d) => (
          <Feed key={d.postId} d={d} />
        ))}
      </section>
    </main>
  );
};

export default Main;
