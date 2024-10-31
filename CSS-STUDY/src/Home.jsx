import { useState } from "react";

import { articles } from "./data";

function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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
          <i className="fa-solid fa-caret-down"></i>
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
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </section>

      {/* 메인 컨텐츠 */}
      <main className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-image">이미지</div>
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>
                {article.date} ・ {article.comments}
              </p>
              <p>
                {article.author} ♥ {article.likes}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
