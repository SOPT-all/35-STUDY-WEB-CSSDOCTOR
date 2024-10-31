import styles from "./Feed.module.css";

const Card = ({ item }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card_img}>
        <img />
      </div>

      <div className={styles.card_description}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <span>
          {item.date} · {item.comments}개의 댓글
        </span>
      </div>

      <div className={styles.card_info}>
        <div>
          <i class="fa-solid fa-user"></i>
          <span>
            <b>by</b> {item.author}
          </span>
        </div>
        <div>
          <i class="fa-solid fa-heart"></i>
          <span>{item.likes}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
