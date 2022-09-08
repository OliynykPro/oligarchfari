import React from "react";
import AddCaseModal from "src/shared/components/Modals/AddCaseModal/AddCaseModal";
import { AddCaseModalProps } from "src/shared/components/Modals/AddCaseModal/interface";
import AddReportModal from "src/shared/components/Modals/AddReportModal/AddReportModal";
import { AddReportModalProps } from "src/shared/components/Modals/AddReportModal/interface";
import ApproveReportModal from "src/shared/components/Modals/ApproveReportModal/ApproveReportModal";
import { ApproveReportModalProps } from "src/shared/components/Modals/ApproveReportModal/interface";

export enum EModals {
  ADD_CASE_MODAL = "ADD_CASE_MODAL",
  ADD_REPORT_MODAL = "ADD_REPORT_MODAL",
  APPROVE_REPORT_MODAL = "APPROVE_REPORT_MODAL",
  EMPTY = "EMPTY",
}

export type ModalsProps = {
  [EModals.ADD_CASE_MODAL]: any;
  [EModals.ADD_REPORT_MODAL]: any;
  [EModals.APPROVE_REPORT_MODAL]: any;
  [EModals.EMPTY]: any;
};

export type ModalProps<T extends EModals> = Omit<ModalsProps[T], "closeModal">;

type Modals = {
  [EModals.ADD_CASE_MODAL]: React.FC<AddCaseModalProps>;
  [EModals.ADD_REPORT_MODAL]: React.FC<AddReportModalProps>;
  [EModals.APPROVE_REPORT_MODAL]: React.FC<ApproveReportModalProps>;
  [EModals.EMPTY]: any;
};

export const MODALS: Modals = {
  [EModals.ADD_CASE_MODAL]: AddCaseModal,
  [EModals.ADD_REPORT_MODAL]: AddReportModal,
  [EModals.APPROVE_REPORT_MODAL]: ApproveReportModal,
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
