import styled from "styled-components";
import { theme } from "src/shared/styles/theme";

const FullWidthSection = styled.section<{
  gapDefault?: string;
  marginDefault?: string;
  gapMedium?: string;
  marginMedium?: string;
  gapSmall?: string;
  marginSmall?: string;
  themeStyles?: any;
}>`
  display: grid;
  grid-column: 1 / span 14;
  grid-template-rows: max-content;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  gap: ${({ gapDefault }) => (gapDefault ? gapDefault : "2rem 2rem")};
  margin: ${({ marginDefault }) => (marginDefault ? marginDefault : 0)};

  @media ${({ themeStyles = theme }) => themeStyles.breakpoints.m} {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${({ gapMedium }) => (gapMedium ? gapMedium : "1rem 1rem")};
    margin: ${({ marginMedium }) => (marginMedium ? marginMedium : 0)};
  }

  @media ${({ themeStyles = theme }) => themeStyles.breakpoints.s} {
    gap: ${({ gapSmall }) => (gapSmall ? gapSmall : "1rem 1rem")};
    margin: ${({ marginSmall }) => (marginSmall ? marginSmall : 0)};
  }
`;

export default FullWidthSection;
