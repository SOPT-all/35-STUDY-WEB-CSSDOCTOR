import * as React from "react";
import type { SVGProps } from "react";
const SvgIcArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100" {...props}>
    <circle cx={50} cy={50} r={48} fill="#fff" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="m40 30 20 20-20 20"
    />
  </svg>
);
export default SvgIcArrowRight;
