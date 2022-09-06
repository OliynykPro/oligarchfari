import styled from "styled-components";

const MaxWidthSection = styled.section<{
  gapDefault: string;
  marginDefault: string;
  gapMedium: string;
  marginMedium: string;
  gapSmall: string;
  marginSmall: string;
  themeStyles: any;
}>`
  display: grid;
  grid-column: 1 / span 12;
  grid-template-rows: max-content;
  grid-template-columns: repeat(12, minmax(auto, 4.2rem));
  gap: ${({ gapDefault }) => (gapDefault ? gapDefault : "2rem 2rem")};
  margin: ${({ marginDefault }) => (marginDefault ? marginDefault : 0)};

  @media ${({ themeStyles }) => themeStyles.breakpoints.m} {
    grid-column: 1 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: ${({ gapMedium }) => (gapMedium ? gapMedium : "1rem 1rem")};
    margin: ${({ marginMedium }) => (marginMedium ? marginMedium : 0)};
  }

  @media ${({ themeStyles }) => themeStyles.breakpoints.s} {
    gap: ${({ gapSmall }) => (gapSmall ? gapSmall : "1rem 1rem")};
    margin: ${({ marginSmall }) => (marginSmall ? marginSmall : 0)};
  }
`;

export default MaxWidthSection;
