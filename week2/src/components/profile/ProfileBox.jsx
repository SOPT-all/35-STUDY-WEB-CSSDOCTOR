import styles from "./Profile.module.css";

const ProfileBox = ({ item }) => {
  const isMyProfile = item.username === "youtheyeon";

  return (
    <li className={styles.profile_item}>
      <img src={item.image} alt="story" />
      <div>
        <b>{item.username}</b>
        <p>{isMyProfile ? "유서연" : "dkshaxx님 외 18명이 팔로우합니다"}</p>
      </div>
      <span>{isMyProfile ? "전환" : "팔로우"}</span>
    </li>
  );
};

export default ProfileBox;
