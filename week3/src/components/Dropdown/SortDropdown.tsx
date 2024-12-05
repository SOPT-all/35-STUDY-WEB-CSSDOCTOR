/** @jsxImportSource @emotion/react */
import { dropdownStyle } from "./SortDropdown.style";

const SortDropdown = () => {
  return (
    <div css={dropdownStyle}>
      <li>인기순</li>
      <li>최근 등록순</li>
      <li>낮은 가격순</li>
      <li>높은 가격순</li>
      <li>할인율 높은순</li>
    </div>
  );
};

export default SortDropdown;
