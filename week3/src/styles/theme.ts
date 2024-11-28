const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    gray01: "#666666",
    gray02: "#414141",
    red01: "#FF3228",
  },

  fonts: {
    header01: {
      fontFamily: "Noto Sans KR",
      fontSize: "12px",
      fontWeight: 400,
      letterSpacing: "-0.48px",
      lineHeight: "28px",
    },
    nav01: {
      fontFamily: "Noto Sans KR",
      fontSize: "13px",
      lineHeight: 1.17,
      letterSpacing: "-0.24px",
    },
  },
};

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;

export default theme;
