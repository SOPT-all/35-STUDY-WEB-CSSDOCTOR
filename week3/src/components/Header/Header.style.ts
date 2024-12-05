import { css, Theme } from "@emotion/react";

export const headerStyle = (theme: Theme) => css`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background-color: ${theme.colors.black};
    ${theme.fonts.header01}
    color: ${theme.colors.white};
    text-decoration: underline;
    text-decoration-color: ${theme.colors.gray01};
  }

  nav {
    position: sticky;
    top: -3rem;
    z-index: 50;
    padding: 0 4rem;
  }

  .top {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 6.3rem;
  }

  img {
    width: 7.7rem;
    height: 5.3rem;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 3.5rem;

    ${theme.fonts.nav01}
  }

  ul {
    display: flex;
    cursor: pointer;
  }

  .list1_1 {
    display: flex;
    align-items: flex-end;
    padding: 0.8rem 2.1rem 0.8rem 0;
    ${theme.fonts.nav01}
    color: ${theme.colors.gray02};
  }

  .list1 {
    display: flex;
    align-items: flex-end;
    padding: 0.8rem 2.1rem;
    ${theme.fonts.nav01}
    color: ${theme.colors.gray02};
  }

  .sale {
    display: flex;
    align-items: flex-end;
    padding: 0.8rem 2.1rem;
    ${theme.fonts.nav01}
    color: ${theme.colors.red01};
  }

  .list2 {
    display: flex;
    align-items: flex-end;
    padding: 0.8rem 2.1rem;
    ${theme.fonts.nav01}
    color: ${theme.colors.gray02};
  }

  .list2_1 {
    display: flex;
    align-items: flex-end;
    padding: 0.8rem 0 0.8rem 2.1rem;
    ${theme.fonts.nav01}
    color: ${theme.colors.gray02};
  }
`;
