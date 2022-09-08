import { BigNumber } from "ethers";

export type OligarchfariContextType = {
  casesList: any;
  addCase(
    name: string,
    description: string,
    deposit: BigNumber,
    endDate: BigNumber
  ): Promise<void>;
  addReport(
    caseIndex: BigNumber,
    description: string,
    urlProofs: string
  ): Promise<void>;
  approveReport(
    caseIndex: BigNumber,
    reportIndex: BigNumber,
    rewardAmount: BigNumber
  ): Promise<void>;
  depositRefund(caseIndex: BigNumber): Promise<void>;
};

export interface OligarchfariProviderProps {
  children: React.ReactNode;
}
