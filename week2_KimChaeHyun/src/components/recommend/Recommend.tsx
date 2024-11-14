import styles from "./Recommend.module.css";
import { userData } from "@datas/userData";
import ProfileCard from "@components/common/profileCard/ProfileCard";
import { recommendationLists } from "@datas/recommendationLists";

const Recommend = () => {
  return (
    <div className={styles.recommendWrapper}>
      <ProfileCard img={userData.img} id={userData.id} description={userData.name} text="전환" />
      <div className={styles.recommendTitle}>
        <h2>회원님을 위한 추천</h2>
        <p>모두 보기</p>
      </div>
      {recommendationLists.map((user, index) => (
        <ProfileCard
          key={`recommend-${index}`}
          img={user.img}
          id={user.id}
          description={`${user.name}님 외 ${user.mutualFollowers}명이 팔로우합니다.`}
          text="팔로우"
        />
      ))}
    </div>
  );
};

export default Recommend;
