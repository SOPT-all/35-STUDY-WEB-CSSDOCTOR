// PostCard.jsx
import React from 'react';
import styles from './PostCard.module.css';

const PostCard = ({
  thumbnail,
  title,
  summary,
  date,
  comments,
  likes,
  author,
  profileImg,
}) => {
  return (
    <article className={styles.card}>
      <a href="#" className={styles.card__link}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt={title} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.summary}>{summary}</p>
          <div className={styles.meta}>
            <span className={styles.date}>{date}</span>
            <span className={styles.comments}>{comments}개의 댓글</span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer__left}>
            <img className={styles.profileImg} src={profileImg}></img>
            <span className={styles.author}>by {author}</span>
          </div>
          <div className={styles.footer__right}>
            <span className={styles.likes}>♥ {likes}</span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default PostCard;
