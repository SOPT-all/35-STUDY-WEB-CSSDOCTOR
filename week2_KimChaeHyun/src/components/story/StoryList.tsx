import React, { useEffect, useRef, useState } from "react";
import Story from "./Story";
import { sampleStories } from "./datas/stories";
import styles from "./StoryList.module.css";
import { IcArrowLeft, IcArrowRight } from "@assets/svgs";

const StoryList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      // 한 아이템의 너비 + 간격
      const itemWidth = 60 + 16;
      const scrollAmount = itemWidth * 4; // 4개씩 이동

      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      updateScrollButtons(); // 초기 버튼 상태 업데이트
      container.addEventListener("scroll", updateScrollButtons);

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <div className={styles.storyWrapper}>
      {canScrollLeft && (
        <IcArrowLeft
          onClick={() => handleScroll("left")}
          className={`${styles.button} ${styles.left}`}
        />
      )}
      <div ref={containerRef} className={styles.storyContainer}>
        {sampleStories.map((story, index) => (
          <Story key={index} img={story.img} username={story.username} />
        ))}
      </div>
      {canScrollRight && (
        <IcArrowRight
          onClick={() => handleScroll("right")}
          className={`${styles.button} ${styles.right}`}
        />
      )}
    </div>
  );
};

export default StoryList;
