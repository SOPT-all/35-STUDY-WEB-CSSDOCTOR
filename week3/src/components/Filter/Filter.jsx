const Filter = () => {
  return (
    <>
      <div>
        <label />
        <button>초기화</button>
      </div>
      <div>
        <p>n개의 결과</p>
        <select>
          <option value="인기순">인기순</option>
          <option value="최근 등록순">최근 등록순</option>
          <option value="낮은 가격순">낮은 가격순</option>
          <option value="높은 가격순">높은 가격순</option>
          <option value="할인율 높은순">할인율 높은순</option>
        </select>
        <select>
          <option value="이미지 크기">이미지 크기</option>
          <option value="작게">작게</option>
          <option value="중간">중간</option>
          <option value="크게">크게</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
