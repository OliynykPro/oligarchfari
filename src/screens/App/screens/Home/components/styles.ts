import { Dimensions } from "src/shared/common/enums/Dimensions";
import styled from "styled-components";

export const HomeStyled = styled.section`
  color: white;
  display: flex;
  height: 100vh;
  font-size: 100px;
  align-items: center;
  justify-content: center;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  @media ${Dimensions.VERTICAL_MOBILE} {
  }

  @media ${Dimensions.HORIZONTAL_MOBILE} {
  }

  @media ${Dimensions.VERTICAL_TABLET} {
  }

  @media ${Dimensions.HORIZONTAL_TABLET} {
  }
`;
