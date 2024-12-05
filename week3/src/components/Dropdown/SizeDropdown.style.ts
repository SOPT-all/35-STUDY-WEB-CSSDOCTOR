import { css, Theme } from "@emotion/react";

export const dropdownStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 29rem;
  right: 8.4rem;
  width: 11.5rem;
  background-color: ${theme.colors.white};
  border-left: 1px solid ${theme.colors.gray05};
  border-right: 1px solid ${theme.colors.gray05};
  border-bottom: 1px solid ${theme.colors.gray05};
  z-index: 1;

  li {
    display: flex;
    align-items: center;
    height: 3rem;
    padding-left: 1rem;

    &:hover {
      background-color: ${theme.colors.gray07};
    }
  }
`;
