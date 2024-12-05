/** @jsxImportSource @emotion/react */
import { dropdownStyle } from "./SizeDropdown.style";

const SizeDropdown = () => {
  return (
    <div css={dropdownStyle}>
      <li>작게</li>
      <li>중간</li>
      <li>크게</li>
    </div>
  );
};

export default SizeDropdown;
