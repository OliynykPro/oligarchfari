import { ModalWrapperProps } from "./interface";
import { Modal, ModalWrapperStyled } from "./styles";

export default function ModalWrapper({
  children,
  closeModal,
  isCentered,
  isFullWidth,
  isFullHeight,
}: ModalWrapperProps) {
  return (
    <>
      <ModalWrapperStyled onClick={closeModal} />
      <Modal
        isCentered={isCentered}
        isFullWidth={isFullWidth}
        isFullHeight={isFullHeight}
      >
        {children}
      </Modal>
    </>
  );
}
