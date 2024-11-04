import style from './App.module.css';

const Profile = ({ profileContent }) => {
  return (
    <>
      <div className={style.profileSet}>
        <div className={style.profileBorder}>
          <img className={style.img} src={profileContent.img} />
        </div>
        <p className={style.id}>{profileContent.id}</p>
      </div>
    </>
  );
};

export default Profile;
