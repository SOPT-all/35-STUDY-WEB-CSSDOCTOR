/** @jsxImportSource @emotion/react */

import { headerStyle } from "./Header.style";

const Header = () => {
  return (
    <div css={headerStyle}>
      <header>EARLY BIRD SALE UP TO 80% OFF</header>
      <nav>
        <div className="top">
          <img src="src/assets/new_jente_logo.svg" />
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li className="list1_1">여성</li>
              <li className="list1">남성</li>
              <li className="list1">브랜드</li>
              <li className="list1">셀렉티드</li>
              <li className="list1">콘텐츠</li>
              <li className="list1">리뷰</li>
              <li className="sale">SALE</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li className="list2">검색</li>
              <li className="list2">로그인</li>
              <li className="list2">위시리스트</li>
              <li className="list2_1">장바구니</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
