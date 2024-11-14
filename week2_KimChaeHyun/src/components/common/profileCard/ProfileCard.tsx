import { ReactNode } from "react";
import styles from "./ProfileCard.module.css";

export interface ProfileCardProps {
  img: ReactNode;
  id: ReactNode;
  description: string;
  text: string;
}

const ProfileCard = ({ img, id, description, text }: ProfileCardProps) => {
  return (
    <li className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>{img}</div>
      <div className={styles.cardInfo}>
        <p>{id}</p>
        <p>{description}</p>
      </div>
      <button>{text}</button>
    </li>
  );
};

export default ProfileCard;
