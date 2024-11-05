import style from './App.module.css';
import Category from './Category'; //이거 안해서 한참 고생했네... 아놔
import Profile from './Profile';
import Feed from './Feed';

function App() {
  return (
    <>
      <h1 className={style.title}>instagram</h1>

      <div className={style.categoryContainer}>
        <Category categoryContent={categoryContent1} />
        <Category categoryContent={categoryContent2} />
        <Category categoryContent={categoryContent3} />
        <Category categoryContent={categoryContent4} />
        <Category categoryContent={categoryContent5} />
        <Category categoryContent={categoryContent6} />
        <Category categoryContent={categoryContent7} />
        <Category categoryContent={categoryContent8} />
      </div>

      <div className={style.categoryFooter}>
        <div className={style.categoryThreads}>
          <span className={`material-symbols-outlined ${style.threadsIcon}`}>
            alternate_email
          </span>
          <p>Threads</p>
        </div>
        <div className={style.categoryMore}>
          <span className={`material-symbols-outlined ${style.moreIcon}`}>
            menu
          </span>
          <p>더보기</p>
        </div>
      </div>

      <div className={style.line}></div>

      <div className={style.profileContainer}>
        <Profile profileContent={profileContent1} />
        <Profile profileContent={profileContent2} />
        <Profile profileContent={profileContent3} />
        <Profile profileContent={profileContent4} />
        <Profile profileContent={profileContent5} />
        <Profile profileContent={profileContent6} />
        <Profile profileContent={profileContent7} />
        <Profile profileContent={profileContent8} />
        <Profile profileContent={profileContent9} />
        <Profile profileContent={profileContent10} />
        <Profile profileContent={profileContent11} />
        <Profile profileContent={profileContent12} />
      </div>

      <div className={style.feedContainer}>
        <Feed feedContent={feedContent1} />
      </div>
    </>
  );
}

export default App;

const categoryContent1 = {
  icon: <span className="material-symbols-outlined">home</span>,
  categoryName: '홈',
};

const categoryContent2 = {
  icon: <span className="material-symbols-outlined">search</span>,
  categoryName: '검색',
};

const categoryContent3 = {
  icon: <span className="material-symbols-outlined">explore</span>,
  categoryName: '탐색 탭',
};

const categoryContent4 = {
  icon: <span className="material-symbols-outlined">smart_display</span>,
  categoryName: '릴스',
};

const categoryContent5 = {
  icon: <span className="material-symbols-outlined">send</span>,
  categoryName: '메시지',
};

const categoryContent6 = {
  icon: <span className="material-symbols-outlined">favorite</span>,
  categoryName: '알림',
};

const categoryContent7 = {
  icon: <span className="material-symbols-outlined">add_box</span>,
  categoryName: '만들기',
};

const categoryContent8 = {
  icon: <span className="material-symbols-outlined">account_circle</span>,
  categoryName: '프로필',
};

const profileContent1 = {
  img: './img/profile1.jpg',
  id: 'zzz.myam',
};

const profileContent2 = {
  img: './img/profile2.jpg',
  id: 'cnaeuuon',
};

const profileContent3 = {
  img: './img/profile3.jpg',
  id: 'nahyun_2',
};

const profileContent4 = {
  img: './img/profile4.jpg',
  id: 'dlgaeye_21',
};

const profileContent5 = {
  img: './img/profile5.jpg',
  id: 'dlwlrma',
};

const profileContent6 = {
  img: './img/profile6.jpg',
  id: 'hongda_16',
};

const profileContent7 = {
  img: './img/profile7.jpg',
  id: '2dumi',
};

const profileContent8 = {
  img: './img/profile8.jpg',
  id: 'yo_ong.d',
};

const profileContent9 = {
  img: './img/profile9.jpg',
  id: 'yurim0601',
};

const profileContent10 = {
  img: './img/profile10.jpg',
  id: 'cheenny',
};

const profileContent11 = {
  img: './img/profile11.jpg',
  id: 'pizza0',
};

const profileContent12 = {
  img: './img/profile12.jpg',
  id: 'seoroeo',
};


const feedContent1 = {
  profileImg: './img/profile1.jpg',
  feedId: 'zzz.myam',
  feedTime: '15시간',
  feedMainImg: './img/profile2.jpg',
  feedFooterImg: './img/profile3.jpg',
  feedFooterImg2: './img/profile4.jpg',
  feedFooterId: 'cheenny',
  feedLetter: '어쩌구 저쩌구',
  feedCommentCount: '12',
}