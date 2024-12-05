/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as S from "./Product.style";
import SortDropdown from "../Dropdown/SortDropdown";
import SizeDropdown from "../Dropdown/SizeDropdown";

const Product = () => {
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const [activeIndex, setActiveIndex] = useState([0, 1, 2]);

  const toggle = (index: number) =>
    setActiveIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  return (
    <main css={S.mainStyle}>
      <h1>여성</h1>

      <div css={S.wrapper}>
        <div css={S.searchFilter}>
          <div className="domestic">
            <label>
              <input type="checkbox" id="domestic" value="domestic" />
              국내배송
            </label>
          </div>

          <ul css={S.toggle}>
            <li onClick={() => toggle(0)}>
              <div className="genderQuestion">
                <p className={activeIndex.includes(0) ? "active" : ""}>성별</p>
                {activeIndex.includes(0) ? <span>―</span> : <span>+</span>}
              </div>

              <div
                className={`genderToggle ${
                  activeIndex.includes(0) ? "active" : ""
                }`}
              >
                <label>
                  <input type="checkbox" id="all" value="all" />
                  전체
                </label>

                <label>
                  <input type="checkbox" id="man" value="man" />
                  남성
                </label>

                <label>
                  <input type="checkbox" id="woman" value="woman" checked />
                  여성
                </label>
              </div>
            </li>

            <li onClick={() => toggle(1)}>
              <div className="categoryQuestion">
                <p className={activeIndex.includes(1) ? "active" : ""}>
                  카테고리
                </p>
                {activeIndex.includes(1) ? <span>―</span> : <span>+</span>}
              </div>

              <div
                className={`categoryToggle ${
                  activeIndex.includes(1) ? "active" : ""
                }`}
              >
                <label>
                  <input type="checkbox" id="all" />
                  전체보기
                </label>
                <label>의류</label>
                <label>슈즈</label>
                <label>액세서리</label>
                <label>가방</label>
              </div>
            </li>

            <li onClick={() => toggle(2)}>
              <div className="brandQuestion">
                <p className={activeIndex.includes(2) ? "active" : ""}>
                  브랜드
                </p>
                {activeIndex.includes(2) ? <span>―</span> : <span>+</span>}
              </div>

              <div
                className={`brandToggle ${
                  activeIndex.includes(2) ? "active" : ""
                }`}
              >
                <label>
                  <input
                    type="text"
                    placeholder="결과 내 검색"
                    className="searchTab"
                  />
                </label>
                <div className="brands">
                  <label>
                    <input type="checkbox" id="(DI)VISION" value="(DI)VISION" />
                    (DI)VISION
                  </label>
                  <label>
                    <input type="checkbox" id="032C" value="032C" />
                    032C
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="1017 ALYX 9SM"
                      value="1017 ALYX 9SM"
                    />
                    1017 ALYX 9SM
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="16ARLINGTON"
                      value="16ARLINGTON"
                    />
                    16ARLINGTON
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="1989 studio"
                      value="1989 studio"
                    />
                    1989 studio
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="A-COLD-WALL"
                      value="A-COLD-WALL"
                    />
                    A-COLD-WALL
                  </label>
                  <label>
                    <input type="checkbox" id="A.P.C." value="A.P.C." />
                    A.P.C.
                  </label>
                </div>
              </div>
            </li>

            <li onClick={() => toggle(3)}>
              <div className="colorQuestion">
                <p className={activeIndex.includes(3) ? "active" : ""}>색상</p>
                {activeIndex.includes(3) ? <span>―</span> : <span>+</span>}
              </div>
            </li>

            <li onClick={() => toggle(4)}>
              <div className="sizeQuestion">
                <p className={activeIndex.includes(4) ? "active" : ""}>
                  사이즈
                </p>
                {activeIndex.includes(4) ? <span>―</span> : <span>+</span>}
              </div>
            </li>

            <li onClick={() => toggle(5)}>
              <div className="priceQuestion">
                <p className={activeIndex.includes(5) ? "active" : ""}>가격</p>
                {activeIndex.includes(5) ? <span>―</span> : <span>+</span>}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div css={S.barStyle}>
            <p>102,079개의 결과</p>
            <div>
              <ul
                className="popular"
                onClick={() => {
                  setView(!view); // ul 클릭하면 view 상태를 반대로
                  setView2(false);
                }}
              >
                <p>인기순</p>
                <img src="public/icon_dropdown_list.svg" />
                {view && <SortDropdown />}
              </ul>
              <ul
                className="size"
                onClick={() => {
                  setView2(!view2);
                  setView(false);
                }}
              >
                <p>중간</p>
                <img src="public/icon_dropdown_list.svg" />
                {view2 && <SizeDropdown />}
              </ul>
            </div>
          </div>

          <ul css={S.productStyle}>
            <li>
              <div>
                <img src="public/1.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>MIU MIU</h4>
                <p>리가드 로고 템플 선글라스</p>
                <p className="cost">￦ 716,000</p>
                <p className="price">￦ 305,000</p>
              </div>
            </li>
            <li>
              <div>
                <img src="public/2.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>

              <div>
                <h4>ISABEL MARANT ETOILE</h4>
                <p>로고 디테일 나일론 패딩</p>
                <p className="cost">￦ 960,000</p>
                <p className="price">￦ 429,000</p>
                <span>국내배송</span>
              </div>
            </li>
            <li>
              <div>
                <img src="public/3.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>paloma-wool</h4>
                <p>KOLA 타이 디테일 니트</p>
                <p className="cost">￦ 300,000</p>
                <p className="price">￦ 160,000</p>
                <span>국내배송</span>
              </div>
            </li>
            <li>
              <div>
                <img src="public/4.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>Herno</h4>
                <p>시어링 인서트 하이넥 패딩</p>
                <p className="cost">￦ 1,190,000</p>
                <p className="price">￦ 581,000</p>
              </div>
            </li>
            <li>
              <div>
                <img src="public/5.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>PRADA</h4>
                <p>프라다 멜로우 러버 부츠 블랙</p>
                <p className="cost">￦ 1,000,000</p>
                <p className="price">￦ 391,000</p>
                <span>국내배송</span>
              </div>
            </li>
            <li>
              <div>
                <img src="public/6.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>Rick Owens</h4>
                <p>LIDO 빈티지 레더 스니커즈</p>
                <p className="cost">￦ 1,517,000</p>
                <p className="price">￦ 780,000</p>
              </div>
            </li>
            <li>
              <div>
                <img src="public/7.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>BURBERRY</h4>
                <p>프로섬 라벨 코튼 후드</p>
                <p className="cost">￦ 1,252,000</p>
                <p className="price">￦ 346,000</p>
                <span>국내배송</span>
              </div>
            </li>
            <li>
              <div>
                <img src="public/8.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>MIU MIU</h4>
                <p>BEAU 로고 디테일 레더 토트백</p>
                <p className="cost">￦ 5,620,000</p>
                <p className="price">￦ 3,900,000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Product;
