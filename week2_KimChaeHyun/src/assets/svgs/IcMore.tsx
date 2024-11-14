import * as React from "react";
import type { SVGProps } from "react";
const SvgIcMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 3"
    {...props}
  >
    <circle cx={1.5} cy={1.5} r={1.5} fill="currentColor" />
    <circle cx={7} cy={1.5} r={1.5} fill="currentColor" />
    <circle cx={12.5} cy={1.5} r={1.5} fill="currentColor" />
  </svg>
);
export default SvgIcMore;
