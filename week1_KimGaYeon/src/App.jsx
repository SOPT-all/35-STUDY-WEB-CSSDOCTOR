// import { useState } from 'react'
import './App.css'
import IconBtn from './components/iconBtn/iconBtn'
import TabBtn from './components/TabBtn/TabBtn';
import Card from './components/card/card';
import { FaBell, FaSearch, FaThumbsUp, FaClock, FaWifi} from 'react-icons/fa';
import velogLogo from './assets/velog.svg';
// import cardData from './data.js';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <a href="javascript:location.reload()">
        <img src={velogLogo} alt="velog 로고" className='logo'></img>
      </a>
      <div className='rightHeader'>
        <IconBtn icon={FaBell} link="#" />
        <IconBtn icon={FaSearch} link="#" />
        <button className='loginBtn'>로그인</button>
      </div>
    </header>
    <div className='TabWrapper'>
      <div className='leftTab'>
        <TabBtn
          icon={FaThumbsUp}
          text="트렌딩"
          isActive={true}
          link="/trending/week"
        />
        <TabBtn
          icon={FaClock}
          text="최신"
          isActive={false}
          link="/latest"
        />
        <TabBtn
          icon={FaWifi}
          text="피드"
          isActive={false}
          link="/feed"
        />
      </div>
      <div className='rightHeader'>

      </div>
    </div>
    <div className='ContentWrapper'>
    {/* {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            author={card.author}
            date={card.date}
          />
        ))} */}
      <Card
        imageUrl="https://via.placeholder.com/300x180"
        title="게시물 제목"
        description="게시물 요약 내용을 여기에 입력하세요."
        author="작성자 이름"
        date="2024-10-31"
      />
    </div>
    </>
  )
}

export default App
