import style from './App.module.css';

const Card = ({ cardContent }) => {
  //props 객체에서 cardContent를 꺼내오는 것

  //글자 수를 정의하고 일정 글자 수가 넘으면 ...으로 처리하려고!!
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className={style.card}>
      <img className={style.img} src={cardContent.img} />
      <div className={style.titleANDcontent}>
        <p className={style.title}>{truncate(cardContent.title, 23)}</p>
        <p className={style.content}>{truncate(cardContent.content, 47)}</p>
      </div>
      <p
        className={style.date}
      >{`${cardContent.date} | ${cardContent.commentCount}개의 댓글`}</p>
      <hr className={style.hr} />
      <div className={style.cardFooter}>
        <div className={style.cardFooterLeft}>
          <span className="material-symbols-outlined">account_circle</span>
          <p className={style.by}>by</p>
          <p className={style.person}>{cardContent.person}</p>
        </div>
        <div className={style.cardFooterRight}>
          <span className="material-symbols-outlined">favorite</span>
          <p className={style.like}>{cardContent.like}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
