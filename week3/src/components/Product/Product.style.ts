import { css, Theme } from "@emotion/react";
import theme from "../../styles/theme";

export const mainStyle = (theme: Theme) => css`
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
  justify-content: center;
  width: 100%;
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
    margin-right: 1rem;
    width: 1.4rem;
    height: 1.4rem;
    border: 1px solid ${theme.colors.gray04};
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
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
    flex-direction: column;
    width: 22.4rem;
    padding: 1rem 0 0.9rem 0;
    border-top: 1px solid ${theme.colors.gray05};
  }

  .genderQuestion,
  .categoryQuestion,
  .brandQuestion,
  .colorQuestion,
  .sizeQuestion,
  .priceQuestion {
    display: flex;
    justify-content: space-between;
  }

  p.active {
    ${theme.fonts.brandName}
    color: ${theme.colors.black};
  }

  label {
    display: flex;
    margin-top: 1rem;
  }

  span {
    padding-right: 1rem;
  }

  .genderToggle,
  .categoryToggle,
  .brandToggle {
    display: flex;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .genderToggle.active,
  .categoryToggle.active,
  .brandToggle.active {
    display: flex;
    flex-direction: column;
    max-height: 20rem;
  }

  .brands {
    overflow-y: scroll;
  }

  .searchTab {
    width: 22.4rem;
    height: 3rem;
    padding: 1.1rem 1.8rem 1rem 1rem;
    margin-bottom: 1rem;
    ${theme.fonts.primary}
    border: 1px solid ${theme.colors.gray05}
  }
`;

export const barStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${theme.fonts.primary}
  cursor: pointer;

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
    padding: 0 0.5rem 0 1rem;
    border: 1px solid ${theme.colors.gray05};
    color: ${theme.colors.gray03};
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const productStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 2rem;

  li {
    padding-top: 4rem;
  }

  img {
    margin-bottom: 1.2rem;
    width: 22.4rem;
    height: 29.9rem;
    cursor: pointer;
  }

  .wishlist {
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0.9rem 0 0 18.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  h4 {
    ${theme.fonts.brandName}
  }

  p {
    margin-top: 0.2rem;
    ${theme.fonts.primary}
  }

  .cost {
    color: ${theme.colors.gray05};
    text-decoration: line-through;
  }

  .price {
    ${theme.fonts.price}
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 20px;
    margin-top: 0.6rem;
    background-color: ${theme.colors.gray06};
    ${theme.fonts.deliver01}
    color: ${theme.colors.gray03};
  }
`;
