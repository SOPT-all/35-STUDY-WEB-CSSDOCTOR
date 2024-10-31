import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ imageUrl, title, description, author, date, comment, like}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="게시물 이미지" className={styles.cardImage} />
      <div className={styles.cardContentWrapper}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.cardDate}>
            <span>{date}&{comment}</span>
          </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterLeft}>
          <img></img>
          <span>{author}</span>
        </div>
        <div className={styles.cardFooterRight}>
          <img></img>
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
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired
};

export default Card;
