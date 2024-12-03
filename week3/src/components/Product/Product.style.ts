import { css, Theme } from "@emotion/react";

export const mainStyle = (theme: Theme) => css`
  /* max-width: unset;
  flex: 1;
  width: 100%; */
  /* width: 100%; */
  padding: 0 4rem;

  h1 {
    padding-top: 4.7rem;
    padding-bottom: 3.8rem;
    ${theme.fonts.title01}
    text-align: center;
  }
`;

export const wrapper = css`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
`;

export const searchFilter = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 22.4rem;
  margin-right: 2rem;

  .domestic {
    display: flex;
    align-items: center;
    padding-bottom: 0.9rem;
  }

  input {
    appearance: none;
    margin: 0;
    width: 1.4rem;
    height: 1.4rem;
    border: 1px solid ${theme.colors.gray04};
    cursor: pointer;
  }

  label {
    padding-left: 1rem;
    ${theme.fonts.primary}
    color: ${theme.colors.gray03};
    cursor: pointer;
  }

  input:checked {
    background-color: ${theme.colors.gray04};
  }
`;

export const toggle = (theme: Theme) => css`
  ${theme.fonts.primary}
  color: ${theme.colors.gray03};
  cursor: pointer;

  li {
    display: flex;
    justify-content: space-between;
    width: 22.4rem;
    padding: 1rem 0 0.9rem 0;
    border-top: 1px solid ${theme.colors.gray05};
  }

  span {
    padding-right: 1rem;
  }
`;

export const barStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${theme.fonts.primary}

  p {
    /* ${theme.fonts.primary} */
  }

  div {
    display: flex;
  }

  .popular {
    border-right: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11.5rem;
    height: 3.2rem;
    padding: 0 1rem;
    border: 1px solid ${theme.colors.gray05};
    color: ${theme.colors.gray03};
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const productStyle = css`
  margin-right: 2rem;
  img {
    width: 22.4rem;
    height: 29.9rem;
    padding-top: 4rem;
  }
`;
