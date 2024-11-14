import React, { useRef, useState } from "react";
import styles from "./Feed.module.css";
import {
  IcArrowLeft,
  IcArrowRight,
  IcComment,
  IcKeep,
  IcLike,
  IcMore,
  IcShare,
} from "@assets/svgs";
import user from "@assets/profile.png";

export interface FeedProps {
  profileImg: string;
  username: string;
  postImg: string;
  caption: string;
  likes: string;
  time: string;
  comments: string;
}

const Feed = ({ profileImg, username, postImg, caption, likes, time, comments }: FeedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 랜덤으로 이미지 여러개 만들기
  const [images] = useState(() =>
    Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => postImg)
  );

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      const newIndex =
        direction === "left"
          ? Math.max(currentIndex - 1, 0)
          : Math.min(currentIndex + 1, images.length - 1);
      setCurrentIndex(newIndex);
      containerRef.current.scrollTo({
        left: newIndex * scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <img src={profileImg} alt={`${username} profile`} className={styles.profileImg} />
        <p className={styles.username}>
          {username} <span>• {time}</span>
        </p>
        <IcMore className={styles.iconHover} />
      </div>
      <div className={styles.carouselWrapper}>
        <IcArrowLeft
          className={`${styles.leftButton} ${currentIndex === 0 ? styles.hidden : ""}`}
          onClick={() => handleScroll("left")}
        />
        <div className={styles.carouselContainer} ref={containerRef}>
          {images.map((image, index) => (
            <div
              className={styles.carouselItem}
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <IcArrowRight
          className={`${styles.rightButton} ${
            currentIndex === images.length - 1 ? styles.hidden : ""
          }`}
          onClick={() => handleScroll("right")}
        />
        {images.length > 1 && (
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.actions}>
        <div className={styles.actionButtons}>
          <IcLike className={styles.iconHover} />
          <IcComment className={styles.iconHover} />
          <IcShare className={styles.iconHover} />
        </div>
        <IcKeep className={styles.iconHover} />
      </div>
      <div className={styles.details}>
        <span className={styles.likes}>
          <img src={user} width={20} />
          좋아요 {likes}
        </span>
        <span className={styles.caption}>
          <strong>{username}</strong> {caption}
        </span>
        <button className={styles.moreCaption}>... 더 보기</button>
        <button className={styles.comments}>{comments}</button>
      </div>
    </div>
  );
};

export default Feed;
