import style from './App.module.css';

const Recommend = ({ recommendContent }) => {
  return (
    <>
      <div className={style.recommendSet}>
        <img
          className={style.recommendProfileImg}
          src={recommendContent.recommendProfileImg}
        />
        <div className={style.recIdSet}>
          <p className={style.recId}>{recommendContent.recId}</p>
          <p className={style.recCount}>{recommendContent.recCount}</p>
        </div>
        <p className={style.recFollow}>팔로우</p>
      </div>
    </>
  );
};

export default Recommend;
