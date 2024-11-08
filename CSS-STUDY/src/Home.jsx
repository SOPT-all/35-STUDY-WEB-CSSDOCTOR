import { useState } from "react";
import { articles } from "./data";
import "./Home.css";

function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownIconOpen, setDropdownIconOpen] = useState(false);
  const [isDropdownHeader, setDropdownHeader] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownIcon = () => {
    setDropdownIconOpen(!isDropdownIconOpen);
  };

  const toggleDropdownHeader = () => {
    setDropdownHeader(!isDropdownHeader);
  };

  return (
    <div className="home">
      {/* 헤더 */}
      <header className="header">
        <h1>velog</h1>
        <div className="header-buttons">
          <i className="fa-regular fa-bell"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>새 글 작성</span>
          <div className="icon" />
          <i
            className="fa-solid fa-caret-down"
            onClick={toggleDropdownHeader}
          ></i>
          {/* 조건부 렌더링 */}
          {isDropdownHeader && (
            <div className="header-drop">
              <p className="dropdown-item">내 벨로그</p>
              <p className="dropdown-item">임시글</p>
              <p className="dropdown-item">읽기 목록</p>
              <p className="dropdown-item">설정</p>
              <p className="dropdown-item">로그아웃</p>
            </div>
          )}
        </div>
      </header>

      {/* 메뉴바 */}
      <section className="menu">
        {/* 링크 */}
        <nav className="nav">
          <div className="clicked">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <p>트렌딩</p>
          </div>
          <div className="not-clicked">
            <i className="fa-regular fa-clock"></i>
            <p>최신</p>
          </div>
          <div className="not-clicked">
            <i className="fa-solid fa-rss"></i>
            <p>피드</p>
          </div>
        </nav>

        {/* 필터링 */}
        <div className="filter-layout">
          <div
            className={`filter ${isDropdownOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            <p>이번 주</p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {/* 조건부 렌더링 */}
          {isDropdownOpen && (
            <div className="dropdown">
              <p className="dropdown-item">오늘</p>
              <p className="dropdown-item">이번 주</p>
              <p className="dropdown-item">이번 달</p>
              <p className="dropdown-item">올해</p>
            </div>
          )}
          {/* 필터링 아이콘 */}
          <div className="filter-icon" onClick={toggleDropdownIcon}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          {isDropdownIconOpen && (
            <div className="dropdown">
              <p className="dropdown-item">공지사항</p>
              <p className="dropdown-item">태그 목록</p>
              <p className="dropdown-item">서비스 정책</p>
              <p className="dropdown-item">Slack</p>
              <div className="dropdown-item"></div>
            </div>
          )}
        </div>
      </section>

      <main className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-image">이미지</div>
            <div className="article-content">
              <h2>{article.title}</h2>
              <p className="story">{article.story}</p>
              <p className="date">{article.date}</p>
            </div>

            {/* 구분선 */}
            <div className="separator"></div>

            {/* 작성자 정보와 좋아요 */}
            <div className="article-author-info">
              <div className="auth">
                <div className="profile" />
                <p>{article.author}</p>
              </div>
              <p>♥ {article.likes}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
