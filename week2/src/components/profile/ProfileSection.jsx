import styles from "./Profile.module.css";
import profiles from "../../data/storyData.json";
import ProfileBox from "./ProfileBox";

const ProfileSection = () => {
  const recommendedProfiles = profiles.slice(1, 6);

  const links = [
    "소개",
    "도움말",
    "홍보 센터",
    "API",
    "채용 정보",
    "개인정보처리방침",
    "약관",
    "위치",
    "언어",
    "Meta Verified",
  ];

  return (
    <section className={styles.profile_section}>
      <ProfileBox item={profiles[0]} />

      <ul className={styles.recommend_list}>
        <div className={styles.recommend_title}>
          <b>회원님을 위한 추천</b>
          <span>모두 보기</span>
        </div>
        {recommendedProfiles.map((item, index) => (
          <ProfileBox key={index} item={item} />
        ))}
      </ul>

      <div className={styles.footer}>
        {links.map((link, index) => (
          <span key={index}>
            <a>{link}</a> {index < links.length - 1 && " · "}
          </span>
        ))}
        <p>© 2024 INSTAGRAM FROM META</p>
      </div>
    </section>
  );
};

export default ProfileSection;
