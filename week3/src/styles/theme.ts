const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    gray01: "#666666",
    gray02: "#414141",
    gray03: "#5c5c5c",
    gray04: "#3d3d3d",
    gray05: "#c2c2c2",
    gray06: "#ebebeb",
    gray07: "#E8E8E8",
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
    title01: {
      fontFamily: "Pretendard",
      fontSize: "31px",
      fontWeight: "bold",
      lineHeight: "calc(45 / 31)",
    },
    primary: {
      fontFamily: "Pretendard",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    brandName: {
      fontFamily: "Pretendard",
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    }, 
    price: {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "18px",
    }, 
    deliver01: {
      fontFamily: "Pretendard",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
    }, 
  },
};

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;

export default theme;
