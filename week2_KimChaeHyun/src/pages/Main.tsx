import React from "react";
import styles from "./Main.module.css";
import StoryList from "@components/story/StoryList";
import Recommend from "@components/recommend/Recommend";
import FeedList from "@components/feed/FeedList";

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.mainWrapper}>
        <StoryList />
        <FeedList />
      </section>
      <Recommend />
    </main>
  );
};

export default Main;
