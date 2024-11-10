import styles from "./Main.module.css";

import Feed from "../Feed/Feed";
import Story from "../story/Story";
import ProfileSection from "../profile/ProfileSection";

import feedData from "../../data/feedData.json";

const Main = () => {
  return (
    <main>
      <section className={styles.feed_section}>
        <Story />
        {feedData.map((d) => (
          <Feed key={d.postId} d={d} />
        ))}
      </section>
      <ProfileSection />
    </main>
  );
};

export default Main;
