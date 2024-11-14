import * as React from "react";
import type { SVGProps } from "react";
const SvgIcReels = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M15.24 14.327a.546.546 0 0 1 0 .93L9.78 18.51c-.347.206-.78-.052-.78-.465v-6.508c0-.414.433-.672.78-.465z"
    />
    <path stroke="#000" strokeWidth={1.8} d="m6 2 4 6M13 2l4 6" />
    <rect width={20.2} height={20.2} x={1.9} y={1.9} stroke="#000" strokeWidth={1.8} rx={5.1} />
    <path stroke="#000" strokeWidth={1.8} d="M2 8h20" />
  </svg>
);
export default SvgIcReels;
