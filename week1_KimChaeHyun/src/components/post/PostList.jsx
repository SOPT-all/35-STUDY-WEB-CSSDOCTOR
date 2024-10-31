import React from 'react';
import posts from '@data/post';
import Post from '@components/post/Post';
import styles from './PostList.module.css';

const PostList = () => {
  return (
    <div className={styles.postListContainer}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
