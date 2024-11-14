import React from "react";
import styles from "./Story.module.css";

interface StoryProps {
  img: string;
  username: string;
}

const Story = ({ img, username }: StoryProps) => {
  return (
    <div className={styles.story}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={username} className={styles.image} />
      </div>{" "}
      <p className={styles.username}>{username}</p>
    </div>
  );
};

export default Story;
