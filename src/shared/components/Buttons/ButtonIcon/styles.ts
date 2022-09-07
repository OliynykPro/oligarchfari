import styled from "styled-components";

export const ButtonIconStyled = styled.button`
  border: none;
  line-height: 0;
  cursor: pointer;
  padding: 0.25rem;
  background-color: transparent;
  transition: ${({ theme }) => theme.transition.easeAll};
  border-radius: ${({ theme }) => theme.borderRadius.br8};

  svg {
    height: auto;
    width: 1.25rem;
    path {
      fill: ${({ theme }) => theme.colors.dirtyWhite};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
