import styles from "./Feed.module.css";

const Card = () => {
  return (
    <li className={styles.card}>
      <div className={styles.card_img}>
        <img />
      </div>

      <div className={styles.card_description}>
        <h1>제 사이드 프로젝트 홍보 방법이요? OOO은 필수입니다.</h1>
        <p>
          2024년 첫 사이드 프로젝트 : 원영적 사고 변환기 출시 2주 만에 방문자
          5만 달성 2024년 두 번째 사이드 프로젝트 : 내가 춘자라니 출시 한 달만에
          방문자 60만 달성 2024년 세 번째 사이드 프로젝트 : 흑백요리사 테스트
          출시 나흘만에 이용자 16만 달성
        </p>
        <span>2024년 10월 19일 · 19개의 댓글</span>
      </div>

      <div className={styles.card_info}>
        <div>
          <i class="fa-solid fa-user"></i>
          <span>
            <b>by</b> 혜욤이
          </span>
        </div>
        <div>
          <i class="fa-solid fa-heart"></i>
          <span>113</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
