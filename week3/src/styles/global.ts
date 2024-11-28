import { css } from "@emotion/react";

import Reset from "./reset";

const GlobalStyle = css`
  ${Reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
