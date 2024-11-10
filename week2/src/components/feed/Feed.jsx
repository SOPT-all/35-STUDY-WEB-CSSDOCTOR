import styles from "./Feed.module.css";
import { formatLikes } from "../../utills/formatLikes";
import { formatTimeAgo } from "../../utills/formatTimeAgo";

const Feed = ({ d }) => {
  return (
    <article>
      <section className={styles.feed_header}>
        <div className={styles.feed_profile}>
          <img src={d.profileImage} alt="profile" />
          <p>
            <b>{d.username}</b>
            <span>•{formatTimeAgo(d.createdAt)}</span>
          </p>
        </div>
        <i class="fa-solid fa-ellipsis"></i>
      </section>

      <section className={styles.feed_img}>
        <img src={d.image} alt="feed" />
      </section>

      <section className={styles.feed_description}>
        <div className={styles.feed_description_icon}>
          <div>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-message"></i>
            <i class="fa-regular fa-paper-plane"></i>
          </div>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <b className={styles.feed_like}>좋아요 {formatLikes(d.likes)}개</b>
        <div className={styles.feed_content}>
          <b>{d.username}</b>
          <span>{d.content}</span>
        </div>
        <span className={styles.feed_all_comment}>댓글 {d.comments}개 모두 보기</span>
        <div className={styles.feed_comment}>
          <input placeholder="댓글 달기..." />
          <span>☺</span>
        </div>
      </section>
    </article>
  );
};

export default Feed;
