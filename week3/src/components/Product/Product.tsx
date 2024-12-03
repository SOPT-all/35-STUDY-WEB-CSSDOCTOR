/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as S from "./Product.style";

const Product = () => {
  const [view, setView] = useState(false);

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
                  setView(!view);
                }}
              >
                <p>인기순</p>
                <img src="public/icon_dropdown_list.svg" />
              </ul>
              <ul
                onClick={() => {
                  setView(!view);
                }}
              >
                <p>중간</p>
                <img src="public/icon_dropdown_list.svg" />
              </ul>
            </div>
          </div>

          <ul css={S.productStyle}>
            <img src="public/1.jpg" />
            <img src="public/1.jpg" />
            <img src="public/1.jpg" />
            <img src="public/1.jpg" />
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Product;
