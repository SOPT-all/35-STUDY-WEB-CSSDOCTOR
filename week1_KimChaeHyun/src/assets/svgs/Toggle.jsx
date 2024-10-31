import * as React from "react";
const SvgToggle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    <path stroke="none" d="m7 10 5 5 5-5z" />
  </svg>
);
export default SvgToggle;
