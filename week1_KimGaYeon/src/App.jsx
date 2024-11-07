// import { useState } from 'react'
import './App.css'
import IconBtn from './components/iconBtn/iconBtn'
import TabBtn from './components/TabBtn/TabBtn';
import Card from './components/card/card';
import { FaBell, FaSearch, FaThumbsUp, FaClock, FaWifi, FaEllipsisV} from 'react-icons/fa';
import velogLogo from './assets/velog.svg';
import Dropdown from './components/Dropdown/Dropdown';
import { useState } from 'react';
import cardData from './data.js';

function App() {
  const selectOptions = ['오늘', '이번 주', '이번 달', '올해'];
  const meatballOptions = ['공지사항','태그 목록', '서비스 정책', 'Slack'];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 보이기/숨기기 상태
  const [isMeatballVisible, setIsMeatballVisible] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // 드롭다운 상태 토글
    // console.log(isDropdownVisible);
  };

  const toggleMeatball = () => {
    setIsMeatballVisible(!isMeatballVisible); // 드롭다운 상태 토글
    // console.log(isDropdownVisible);
  };


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
      <div className='rightTab'>
        <div className='selectBox' onClick={toggleDropdown}>
          <span className="text">이번 주</span>
          <span className="icon">▼</span>
        </div>
        {isDropdownVisible && <Dropdown options={selectOptions} />}
        <div className='meatballBtn' onClick={toggleMeatball}>
          <FaEllipsisV /> 
        </div>
        {isMeatballVisible && <Dropdown options={meatballOptions} />}
      </div>
    </div>

    <div className='ContentWrapper'>
    {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            authorImg = {card.authorImg}
            author={card.author}
            date={card.date}
            comment= {card.comment}
            like ={card.like}
          />
        ))}
      {/* <Card
        imageUrl="public/img/1.jpg"
        title="게시물 제목"
        description="게시물 요약 내용을 여기에 입력하세요."
        authorImg ="img/2.jpg"
        author="작성자 이름"
        date="2024-10-31"
        comment= {9}
        like ={12}
      /> */}
    </div>
    </>
  )
}

export default App
