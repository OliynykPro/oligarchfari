import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  EModals,
  InternalProviderModalState,
  ModalsProps,
  initialModalState,
  ModalContextType,
  ModalProps,
  MODALS,
} from "./interface";

const initialState: ModalContextType = {
  modal: EModals.EMPTY,
  props: null,
  showModal: () => undefined,
  closeModal: () => undefined,
};

const ModalContextHOC = createContext<ModalContextType>(initialState);

export function ModalContextProvider({ children }: any) {
  const [modalState, setModalState] =
    useState<InternalProviderModalState>(initialModalState);
  const closeModal = useCallback(() => {
    setModalState(initialModalState);
  }, []);

  const showModal = <T extends EModals>(modal: T, props: ModalProps<T>) => {
    setModalState({ modal, props });
  };

  const Component: ModalsProps[EModals] = MODALS[modalState.modal];

  const modalStore = useMemo(
    () => ({
      ...modalState,
      showModal,
      closeModal,
    }),
    [closeModal, modalState]
  );

  return (
    <ModalContextHOC.Provider value={modalStore}>
      {children}
      {Component && <Component closeModal={closeModal} {...modalState.props} />}
    </ModalContextHOC.Provider>
  );
}

export const ModalProvider = () => useContext(ModalContextHOC);
