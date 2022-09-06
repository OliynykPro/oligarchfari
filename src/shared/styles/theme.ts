import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  breakpoints: {
    s: "only screen and (max-width: 65rem)",
    m: "only screen and (max-width: 70rem)",
  },
  colors: {
    white: "#FFFFFF",
  },
  borderRadius: {
    br2: "0.125rem",
    br8: "0.5rem",
    br12: "0.75rem",
    br24: "1.5rem",
  },
  transition: {
    easeAll: "0.5s ease all",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
