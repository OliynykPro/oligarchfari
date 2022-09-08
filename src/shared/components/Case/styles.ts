import styled from "styled-components";

export const CaseStyled = styled.div`
  width: 40rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 3px 2px -2px #e0e0e0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.br24};

  &:hover {
    button {
      opacity: 1 !important;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  div {
    &.name {
      cursor: pointer;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin-bottom: 0.75rem;
    }

    &.description {
      font-weight: 400;
      line-height: 1rem;
      font-size: 0.75rem;
      margin-bottom: 1.5rem;
    }

    &.chips {
      display: flex;
      align-items: center;

      span {
        color: black;
        padding: 4px 6px;
        font-size: 0.75rem;
        border-radius: 28px;
        margin-right: 0.5rem;
        background-color: #f1f1f1;

        &.reward {
          font-weight: 800;

          &.open {
            color: white;
            background-color: black;
          }

          &.closed {
            color: black;
          }
        }

        &.open {
          color: #4db400;
          background-color: #dbf0cc;
        }
      }

      button {
        opacity: 0;
        padding: 0;
        margin: 0 0 0 auto;
        background-color: transparent;

        span {
          margin-right: 0;
        }
      }
    }

    &.report-list {
      margin-top: 2rem;

      .list-item {
        padding: 1rem;
        border-radius: 1rem;
        background-color: #f1f1f1;

        div {
          &.name {
            font-weight: 700;
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }

          &.descr {
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 1.4rem;
            margin-bottom: 1rem;
          }

          &.link {
            display: flex;
            align-items: center;
            justify-content: space-between;

            a {
              color: black;
              font-weight: 500;
              border-radius: 1.75rem;
              padding: 0.25rem 0.75rem;
              background-color: #e9e9e9;
            }

            button {
              padding: 0.25rem 0.375rem;
            }
          }
        }
      }
    }
  }
`;
