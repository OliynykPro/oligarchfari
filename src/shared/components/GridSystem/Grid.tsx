import styled from "styled-components";

const Grid = styled.div<{
  gapDefault?: string;
  marginDefault?: string;
  gapMedium?: string;
  marginMedium?: string;
  gapSmall?: string;
  marginSmall?: string;
  themeStyles?: any;
}>`
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  gap: ${({ gapDefault }) => (gapDefault ? gapDefault : "0rem 0rem")};
  margin: ${({ marginDefault }) => (marginDefault ? marginDefault : 0)};

  @media ${({ themeStyles }) => themeStyles.breakpoints.m} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${({ gapMedium }) => (gapMedium ? gapMedium : "0rem 0rem")};
    margin: ${({ marginMedium }) => (marginMedium ? marginMedium : 0)};
  }

  @media ${({ themeStyles }) => themeStyles.breakpoints.s} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${({ gapSmall }) => (gapSmall ? gapSmall : "0rem 0rem")};
    margin: ${({ marginSmall }) => (marginSmall ? marginSmall : 0)};
  }
`;

export default Grid;
