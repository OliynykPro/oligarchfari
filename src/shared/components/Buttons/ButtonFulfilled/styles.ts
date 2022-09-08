import styled from "styled-components";

export const ButtonFulfilledStyled = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.4rem;
  padding: 0.65rem 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition.easeAll};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.br50};

  &.medium {
    padding: 0.525rem 0.5rem;

    &.with-icon {
      padding: 0.5rem 0.5rem;
    }
  }

  &.transparent {
    background-color: transparent;

    &:active {
      background-color: ${({ theme }) => theme.colors.black};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }

  &.with-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.5rem;

    &.icon-left {
      span {
        margin-left: 0.5rem;
      }
    }

    &.icon-right {
      span {
        margin-right: 0.5rem;
      }
    }
  }

  svg {
    height: auto;
    width: 1.25rem;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
