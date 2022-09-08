import styled from "styled-components";

export const ModalWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  opacity: 0.4;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Modal = styled.div<{
  isCentered?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
}>`
  height: ${({ isFullHeight }) => (isFullHeight ? "100vh" : "auto")};
  left: 50%;
  z-index: 200;
  padding: 1rem;
  display: flex;
  overflow: auto;
  position: fixed;
  max-height: 90%;
  flex-direction: column;
  box-shadow: 0px 4px 8px -4px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  top: ${({ isCentered }) => (isCentered ? "50%" : "100%")};
  min-width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "30rem")};
  border-radius: ${({ isFullWidth }) =>
    isFullWidth ? "1rem 1rem 0 0" : "1rem"};
  transform: ${({ isCentered }) =>
    isCentered ? "translate(-50%, -50%)" : "translate(-50%, -100%)"};
`;
