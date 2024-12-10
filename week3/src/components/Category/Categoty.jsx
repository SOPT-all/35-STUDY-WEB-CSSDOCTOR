const Category = () => {
  return (
    <>
      <input type="checkbox" id="Checkbox1" />
      <label htmlFor="Checkbox1">국내배송</label>
      <hr />
      <p>성별</p>
      <input type="checkbox" id="Checkbox2" />
      <label htmlFor="Checkbox2">전체</label>
      <input type="checkbox" id="Checkbox3" />
      <label htmlFor="Checkbox3">남성</label>
      <input type="checkbox" id="Checkbox4" />
      <label htmlFor="Checkbox4">여성</label>
      <hr />
      <p>카테고리</p>
      <input type="checkbox" id="Checkbox5" />
      <label htmlFor="Checkbox5">전체보기</label>
      <input type="checkbox" id="Checkbox6" />
      <label htmlFor="Checkbox6">의류</label>
      <input type="checkbox" id="Checkbox7" />
      <label htmlFor="Checkbox7">슈즈</label>
      <input type="checkbox" id="Checkbox8" />
      <label htmlFor="Checkbox8">악세서리</label>
      <input type="checkbox" id="Checkbox9" />
      <label htmlFor="Checkbox9">가방</label>
      <hr />
      <p>브랜드</p>
      <hr />
      <p>색상</p>
      <hr />
      <p>사이즈</p>
      <hr />
      <p>가격</p>
      <label>최소</label>
      <input />
      <label>최대</label>
      <input />
    </>
  );
};

export default Category;