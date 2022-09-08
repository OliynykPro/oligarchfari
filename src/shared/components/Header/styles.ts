import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  margin: 1.25rem;
  padding: 0px 1rem;
  align-items: center;
  justify-content: space-between;

  div {
    &:first-child {
      font-weight: 800;
      font-size: 1.9675rem;
      text-transform: lowercase;
    }

    &:last-child {
      button {
        margin-right: 1rem;

        &:last-child {
          margin-right: 0;

          &.logged-in {
            color: black;
            background-color: #e7e7e7;
          }
        }
      }
    }
  }
`;
