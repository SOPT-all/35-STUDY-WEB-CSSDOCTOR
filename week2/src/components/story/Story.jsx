import React, { useState } from "react";
import styles from "./Story.module.css";
import stories from "../../data/storyData.json";

const Story = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const itemsPerPage = 8;
  const itemsToScroll = 4;

  const visibleStories = stories.slice(scrollIndex, scrollIndex + itemsPerPage);

  // 스토리 인덱스를 변화시키는 함수
  const scrollTo = (direction) => {
    setScrollIndex((prevIndex) => {
      if (direction === "prev" && prevIndex - itemsToScroll >= 0) {
        return prevIndex - itemsToScroll;
      } else if (
        direction === "next" &&
        prevIndex + itemsPerPage + itemsToScroll <= stories.length
      ) {
        return prevIndex + itemsToScroll;
      }
      return prevIndex;
    });
  };

  const isPrevDisabled = scrollIndex <= 0;
  const isNextDisabled = scrollIndex + itemsPerPage >= stories.length;

  return (
    <div className={styles.story_container}>
      <button
        className={styles.nav_button}
        onClick={() => scrollTo("prev")}
        disabled={isPrevDisabled}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <ul className={styles.story_list}>
        {visibleStories.map((story, index) => (
          <li key={index} className={styles.story_item}>
            <img src={story.image} alt="story" />
            <p>{story.username}</p>
          </li>
        ))}
      </ul>

      <button
        className={styles.nav_button}
        onClick={() => scrollTo("next")}
        disabled={isNextDisabled}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Story;
