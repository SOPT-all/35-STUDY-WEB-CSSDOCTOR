import * as React from "react";
import type { SVGProps } from "react";
const SvgIcComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask id="ic_comment_svg__a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M21.452 17.63A10.95 10.95 0 0 0 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11a10.95 10.95 0 0 0 5.64-1.555l5.208 1.396z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="currentColor"
      d="m21.452 17.63-1.546-.922a1.8 1.8 0 0 0-.193 1.388zm-3.811 3.816.466-1.74a1.8 1.8 0 0 0-1.39.195zm5.207 1.395-.466 1.738a1.8 1.8 0 0 0 2.204-2.204zM21.2 12a9.15 9.15 0 0 1-1.294 4.708l3.091 1.845A12.75 12.75 0 0 0 24.8 12zM12 2.8a9.2 9.2 0 0 1 9.2 9.2h3.6C24.8 4.93 19.07-.8 12-.8zM2.8 12A9.2 9.2 0 0 1 12 2.8V-.8C4.93-.8-.8 4.93-.8 12zm9.2 9.2A9.2 9.2 0 0 1 2.8 12H-.8c0 7.07 5.73 12.8 12.8 12.8zm4.717-1.299A9.15 9.15 0 0 1 12 21.2v3.6c2.396 0 4.644-.66 6.565-1.81zm.458 3.283 5.207 1.395.932-3.477-5.207-1.395zm7.412-.81-1.397-5.21-3.477.932 1.396 5.21z"
      mask="url(#ic_comment_svg__a)"
    />
  </svg>
);
export default SvgIcComment;
