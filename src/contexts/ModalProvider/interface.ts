import React from "react";
// import FilterModal from "src/shared/components/Modals/FilterModal/FilterModal";

export enum EModals {
  // SIGN_OUT_MODAL = "SIGN_OUT_MODAL",
  EMPTY = "EMPTY",
}

export type ModalsProps = {
  // [EModals.SIGN_OUT_MODAL]: any;
  [EModals.EMPTY]: any;
};

export type ModalProps<T extends EModals> = Omit<ModalsProps[T], "closeModal">;

type Modals = {
  // [EModals.SIGN_OUT_MODAL]: React.FC<SignOutModalProps>;
  [EModals.EMPTY]: any;
};

export const MODALS: Modals = {
  // [EModals.SIGN_OUT_MODAL]: SignOutModal,
  [EModals.EMPTY]: null,
};

export type ModalContextType = {
  modal: EModals;
  props: ModalsProps[EModals];
  showModal: <T extends EModals>(modal: T, props: ModalProps<T>) => void;
  closeModal: () => void;
};

export interface InternalProviderModalState {
  modal: EModals;
  props: ModalsProps[EModals];
}

export const initialModalState: InternalProviderModalState = {
  modal: EModals.EMPTY,
  props: null,
};
