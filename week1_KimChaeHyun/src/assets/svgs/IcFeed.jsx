import * as React from "react";
const SvgIcFeed = (props) => (
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
    <circle cx={6.18} cy={17.82} r={2.18} stroke="none" />
    <path
      stroke="none"
      d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56m0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9"
    />
  </svg>
);
export default SvgIcFeed;