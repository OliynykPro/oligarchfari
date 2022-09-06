import styled from "styled-components";

export const Row = styled.div<{
  sd: string;
  ed: string;
  sm: string;
  em: string;
  ss: string;
  es: string;
  themeStyles?: any;
}>`
  grid-column-start: ${({ sd }) => (sd ? sd : "1")};
  grid-column-end: span ${({ ed }) => (ed ? ed : "12")};

  @media ${({ theme }) => theme.breakpoints.m} {
    grid-column-start: ${({ sm }) => (sm ? sm : "1")};
    grid-column-end: span ${({ em }) => (em ? em : "6")};
  }

  @media ${({ theme }) => theme.breakpoints.s} {
    grid-column-start: ${({ ss }) => (ss ? ss : "1")};
    grid-column-end: span ${({ es }) => (es ? es : "6")};
  }
`;
