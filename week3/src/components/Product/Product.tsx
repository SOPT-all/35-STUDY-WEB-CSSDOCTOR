/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as S from "./Product.style";
import SortDropdown from "../Dropdown/SortDropdown";
import SizeDropdown from "../Dropdown/SizeDropdown";

const Product = () => {
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);

  return (
    <main css={S.mainStyle}>
      <h1>여성</h1>

      <div css={S.wrapper}>
        <div css={S.searchFilter}>
          <div className="domestic">
            <input
              type="checkbox"
              id="domestic"
              name="deliver"
              value="domestic"
            />
            <label htmlFor="all">국내배송</label>
          </div>

          <ul css={S.toggle}>
            <li className="gender">
              <p>성별</p>
              <span>―</span>
            </li>
            <li>
              <p>카테고리</p>
              <span>―</span>
            </li>
            <li>
              <p>브랜드</p>
              <span>―</span>
            </li>
            <li>
              <p>색상</p>
              <span>+</span>
            </li>
            <li>
              <p>사이즈</p>
              <span>+</span>
            </li>
            <li>
              <p>가격</p>
              <span>+</span>
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
                <h4>MIU MIU</h4>
                <p>리가드 로고 템플 선글라스</p>
                <p className="cost">￦ 716,000</p>
                <p className="price">￦ 305,000</p>
                <span>국내배송</span>
              </div>
            </li>
            <li>
              <div>
                <img src="public/6.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>ISABEL MARANT ETOILE</h4>
                <p>로고 디테일 나일론 패딩</p>
                <p className="cost">￦ 960,000</p>
                <p className="price">￦ 429,000</p>
              </div>
            </li>
            <li>
              <div>
                <img src="public/7.jpg" />
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
                <img src="public/8.jpg" />
                <img src="public/icon_wishlist.svg" className="wishlist" />
              </div>
              <div>
                <h4>Herno</h4>
                <p>시어링 인서트 하이넥 패딩</p>
                <p className="cost">￦ 1,190,000</p>
                <p className="price">￦ 581,000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Product;
