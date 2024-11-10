import styles from "./Feed.module.css";
import profile from "../../assets/profile/0.jpg";
import feed from "../../assets/feed/1.jpg";

const Feed = () => {
  return (
    <article>
      <section className={styles.feed_header}>
        <div className={styles.feed_profile}>
          <img src={profile} alt="profile" />
          <p>
            <b>whee_inthemood</b>
            <span>•2일</span>
          </p>
        </div>
        <i class="fa-solid fa-ellipsis"></i>
      </section>

      <section className={styles.feed_img}>
        <img src={feed} alt="feed" />
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
        <b className={styles.feed_like}>좋아요 2.6만개</b>
        <div className={styles.feed_content}>
          <b>whee_inthemood</b>
          <span>내용</span>
        </div>
        <span className={styles.feed_all_comment}>댓글 5개 모두 보기</span>
        <div className={styles.feed_comment}>
          <input placeholder="댓글 달기..." />
          <span>☺</span>
        </div>
      </section>
    </article>
  );
};

export default Feed;
