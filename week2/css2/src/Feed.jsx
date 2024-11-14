import style from './App.module.css';

const Feed = ({ feedContent }) => {
  return (
    <>
      <div className={style.feedSet}>
        <div className={style.feedHeader}>
          <div className={style.feedHeaderLeft}>
            <img className={style.profileImg} src={feedContent.profileImg} />
            <p className={style.feedId}>{feedContent.feedId}</p>
            <p className={style.feedTime}>• {feedContent.feedTime}</p>
          </div>
          <span className={`material-symbols-outlined ${style.more}`}>
            more_horiz
          </span>
        </div>
        <img className={style.feedMainImg} src={feedContent.feedMainImg} />
        <div className={style.feedIcon}>
          <div className={style.feedIconLeft}>
            <span className={`material-symbols-outlined ${style.heart}`}>
              favorite
            </span>
            <span className={`material-symbols-outlined ${style.comment}`}>
              chat_bubble
            </span>
            <span className={`material-symbols-outlined ${style.send}`}>
              send
            </span>
          </div>
          <span className={`material-symbols-outlined ${style.bookmark}`}>
            bookmark
          </span>
        </div>
        <div className={style.feedFooter}>
          <img
            className={style.feedFooterImg}
            src={feedContent.feedFooterImg}
          />
          <img
            className={style.feedFooterImg2}
            src={feedContent.feedFooterImg2}
          />
          <p className={style.feedFooterId}>
            {feedContent.feedFooterId}님<b className={style.bold}> 여러 명</b>이
            좋아합니다
          </p>
        </div>
        <div className={style.feedLetterSet}>
          <p className={style.feedId}>{feedContent.feedId}</p>
          <p className={style.feedLetter}>{feedContent.feedLetter}</p>
        </div>
        <p className={style.feedCommentCount}>
          댓글{feedContent.feedCommentCount}개 모두 보기
        </p>
        <div className={style.feedCommentSet}>
          <input
            type="text"
            className={style.feedComment}
            placeholder="댓글 달기..."
          ></input>
          <span className={`material-symbols-outlined ${style.smile}`}>
            sentiment_satisfied
          </span>
        </div>
        <br />
      </div>
    </>
  );
};

export default Feed;
