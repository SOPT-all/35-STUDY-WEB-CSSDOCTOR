import React from 'react';
import styles from './Post.module.css';
import {IcLike} from "@assets/svgs"

const Post = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <img src={post.image} alt={post.title} className={styles.postImage} />
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postDescription}>{post.description}</p>
        <div className={styles.postMeta}>
          <span>{post.date}</span>
          <span> · {post.comments}개의 댓글</span>
        </div>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.authorInfo}>
          <img src={post.authorImage} alt={post.author} className={styles.authorImage} />
          <span className={styles.authorName}>by {post.author}</span>
        </div>
        <div className={styles.postHeart}>
          <IcLike className={styles.Icon}/>
         {post.hearts}
        </div>
      </div>
    </div>
  );
};

export default Post;
