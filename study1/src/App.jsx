import style from './App.module.css';
import Card from './Card';

function App() {
  return (
    <>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <h1 className={style.title}>velog</h1>
        </div>
        <div className={style.headerRight}>
          <span className="material-symbols-outlined">notifications</span>
          <span className="material-symbols-outlined">search</span>
          <h2 className={style.logIn}>로그인</h2>
        </div>
      </div>

      <div className={style.category}>
        <div className={style.categoryLeft}>
          <div className={style.trending}>
            <span className="material-symbols-outlined">trending_up</span>
            <h3 className={style.trendingText}>트렌딩</h3>
          </div>
          <div className={style.new}>
            <span className={`material-symbols-outlined ${style.newIcon}`}>
              schedule
            </span>
            <h3 className={style.newText}>최신</h3>
          </div>
          <div className={style.feed}>
            <span className={`material-symbols-outlined ${style.feedIcon}`}>
              wifi
            </span>
            <h3 className={style.feedText}>피드</h3>
          </div>
        </div>

        <div className={style.categoryRight}>
          <select className={style.selectRange}>
            <option value="오늘">오늘</option>
            <option value="이번 주" disabled selected>
              이번 주
            </option>
            <option value="이번 달">이번 달</option>
            <option value="올해">올해</option>
          </select>
          <span className="material-symbols-outlined dotIcon">more_vert</span>
        </div>
      </div>

      <div className={style.cardContainer}>
      <Card cardContent={cardContent1} />
      <Card cardContent={cardContent2} />
      <Card cardContent={cardContent3} />
      <Card cardContent={cardContent4} />
      <Card cardContent={cardContent5} />
      <Card cardContent={cardContent6} />
      <Card cardContent={cardContent7} />
      <Card cardContent={cardContent8} />
      <Card cardContent={cardContent9} />
      <Card cardContent={cardContent10} />
      <Card cardContent={cardContent11} />
      <Card cardContent={cardContent12} />
      </div>
      
    </>
  );
}

export default App;

const cardContent1 = {
  img: '/img/card1.jpg',
  title: '제 사이드 프로젝트 홍보 방법이요? OOO은 필수...',
  content: '열심히 서비스를 만들었는데... 왜 아무도 안 들어오징',
  date: '2024년 10월 19일',
  commentCount: '19',
  person: '혜욤이',
  like: '119',
};

const cardContent2 = {
  img: '/img/card2.jpg',
  title: '에어비앤비는 어떻게 리액트를 점진적으로 업그레이드했을까?',
  content: '에어비앤비의 프런트엔드는 최근 중요한 목표를 달성했습니다. 모든 웹이 리액트 16에서 최신 메이저 버전1인 리액트 18로 업그레이드되었습니다.',
  date: '2024년 10월 21일',
  commentCount: '0',
  person: 'Saetbyeol',
  like: '40',
};

const cardContent3 = {
  img: '/img/card3.jpg',
  title: 'React Hydration의 내부 동작 원리',
  content: 'Backing DOM Node가 필요한 각 Fiber 노드는 stateNode라는 속성을 통해 해당 DOM 노드를 참조한다.',
  date: '2024년 10월 18일',
  commentCount: '4',
  person: '우혁',
  like: '77',
};

const cardContent4 = {
  img: '/img/card4.jpg',
  title: '코드 두 줄로 다크모드 지원하기',
  content: '다크 모드를 지원하려다 보면 예상보다 많은 공수가 드는 경우가 많습니다. 기존 컬러에 맞춰 다크모드용 색상을 정의해야 하는데,',
  date: '2024년 10월 25일',
  commentCount: '3',
  person: '박진현',
  like: '50',
};

const cardContent5 = {
  img: '/img/card5.jpg',
  title: '혼자서 2일만에 사이드 프로젝트 배포까지 - ‘졸업이당’',
  content: '나는 소프트웨어 마이스터 고등학교를 2년째 다니고 있는 고등학생이고 목표는 3학년 때까지',
  date: '2024년 10월 20일',
  commentCount: '6',
  person: '이강현',
  like: '62',
};

const cardContent6 = {
  img: '/img/card6.jpg',
  title: '[번역] 영국의 조약이 .io 도메인의 종말을 의미할 수 있는 이유',
  content: '영국이 체결한 조약은 .io 도메인이 사라질 가능성이 있습니다.',
  date: '2024년 10월 26일',
  commentCount: '2',
  person: 'eunbinn',
  like: '12',
};

const cardContent7 = {
  img: '/img/card7.jpg',
  title: 'DB 설계로 고민하는 주니어 개발자들, 이 비밀 전략을 아시나요?',
  content: 'DB 설계, 정말 어렵죠? 저도 주니어 시절 똑같은 고민을 했습니다. 기획이 바뀔 때마다 DB 구조를 뜯어고치느라 밤새우기 일쑤였죠.',
  date: '2024년 10월 20일',
  commentCount: '2',
  person: '타락한스벨트전도사',
  like: '33',
};

const cardContent8 = {
  img: '/img/card8.jpg',
  title: '당신이 퇴근하고 사이드 프로젝트를 못 하는 이유 - OO이 없어서.',
  content: '혹시 제가 어떤 사람인지 아직 잘 모르시는 분들은,',
  date: '2024년 10월 18일',
  commentCount: '3',
  person: '이욤혜',
  like: '29',
};

const cardContent9 = {
  img: '/img/card9.jpg',
  title: '혹시.. 기술 면접 준비는 잘 돼가시나요?',
  content: '안녕하세요, 매일메일입니다. 벨로그 이용자 분들 중에서 기술 면접을 준비하고 계신 분들이 많이 계실 것 같은데요.',
  date: '4일 전',
  commentCount: '13',
  person: '매일메일',
  like: '22',
};

const cardContent10 = {
  img: '/img/card10.jpg',
  title: 'MySQL 트러블슈팅 회고 (feat. 대소문자 구분)',
  content: '업무 중 겪었던 찾기 까다로웠던 이슈의 트러블슈팅 과정을 정리합니다.',
  date: '6일 전',
  commentCount: '0',
  person: '숑숑',
  like: '4',
};

const cardContent11 = {
  img: '/img/card11.jpg',
  title: '[TOP 10] 개발자들이 많이 읽은 아티클 모음 - 10월 4주차',
  content: '지정된 도메인 사용에 대한 정치적 영향을 이해하고자 하는 분에게 추천합니다.',
  date: '4일 전',
  commentCount: '1',
  person: '일일일',
  like: '26',
};

const cardContent12 = {
  img: '/img/card12.jpg',
  title: 'Suspense가 Hydration중에 동작하는 방식',
  content: '일반적인 상황에서는 Offscreen 컴포넌트 내부의 내용이 렌더링된다.',
  date: '5일 전',
  commentCount: '2',
  person: '우혁',
  like: '21',
};