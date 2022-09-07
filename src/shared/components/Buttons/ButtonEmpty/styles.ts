import styled from "styled-components";

export const ButtonEmptyStyled = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  transition: ${({ theme }) => theme.transition.easeAll};

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
