import * as React from "react";
import type { SVGProps } from "react";
const SvgIcBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 16"
    {...props}
  >
    <path stroke="#000" strokeWidth={1.8} d="M0 1.1h20M0 8.1h20M0 15.1h20" />
  </svg>
);
export default SvgIcBurger;
