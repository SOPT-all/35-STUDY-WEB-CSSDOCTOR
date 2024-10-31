// Main.jsx
import React from 'react';
import styles from './Main.module.css';
import PostCard from '../card/PostCard';
import samplePosts from '../../data/samplePost';

function Main() {
  return (
    <section className={styles.main__section}>
      <div className={styles.grid}>
        {samplePosts.map((post) => (
          <PostCard
            key={post.id}
            thumbnail={post.thumbnail}
            title={post.title}
            summary={post.summary}
            date={post.date}
            comments={post.comments}
            likes={post.likes}
            author={post.author}
            profileImg={post.profileImg}
          />
        ))}
      </div>
    </section>
  );
}

export default Main;
