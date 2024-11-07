import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { FaHeart } from 'react-icons/fa';


const Card = ({ imageUrl, title, description, authorImg, author, date, comment, like}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="게시물 이미지" className={styles.cardImage} />
      <div className={styles.cardContentWrapper}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.cardDate}>
            <span>{date} · {comment}개의 댓글</span>
          </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterLeft}>
        <img src={authorImg} alt="작성자 이미지" className={styles.authorImg} />
        {/* 여기 author에만 볼드를 할 수 있어요? */}
          <span>by {author}</span>
        </div>
        <div className={styles.cardFooterRight}>
          <FaHeart />
          <span>{like}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired
};

export default Card;
