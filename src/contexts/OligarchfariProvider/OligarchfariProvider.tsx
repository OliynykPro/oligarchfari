import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { useWalletServiceContext } from "../WalletProvider/WalletProvider";
import {
  OligarchfariContextType,
  OligarchfariProviderProps,
} from "./interface";

const initialSalesState: OligarchfariContextType = {
  casesList: [],
  addCase: async () => undefined,
  addReport: async () => undefined,
  approveReport: async () => undefined,
  depositRefund: async () => undefined,
};

export const OligarchfariServiceContext =
  createContext<OligarchfariContextType>(initialSalesState);

export function OligarchfariServiceProvider({
  children,
}: OligarchfariProviderProps) {
  const { contract, signer, provider, account } = useWalletServiceContext();

  const [casesList, setCasesList] = useState<any>([]);

  useEffect(() => {
    getCaseList();
  }, [contract]);

  async function getCaseData(id: BigNumber) {
    if (!contract) return;

    return await contract.getCase(id);
  }

  async function getCaseList() {
    if (!contract) return;

    try {
      const count = await contract.getCaseCounter();

      const casesIds: Array<BigNumber> = Array.from(
        { length: count.toNumber() },
        (_, i) => BigNumber.from(i)
      );

      const casesListData = await Promise.all(
        casesIds.map(async (caseId: BigNumber) => {
          return await getCaseData(caseId);
        })
      );

      setCasesList(casesListData);
    } catch (error) {
      console.error(error);
    }
  }

  async function addCase(
    name: string,
    description: string,
    deposit: BigNumber,
    endDate: BigNumber
  ): Promise<void> {
    if (!contract) return;
    const options = { value: deposit };

    try {
      const tx = await contract.createCase(
        name,
        description,
        deposit,
        endDate,
        options
      );

      getCaseList();

      setTimeout(() => {
        getCaseList();
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }

  async function addReport(
    caseIndex: BigNumber,
    description: string,
    urlProofs: string
  ) {
    if (!contract) return;

    try {
      await contract.report(caseIndex, description, urlProofs);

      getCaseList();

      setTimeout(() => {
        getCaseList();
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }

  async function approveReport(
    caseIndex: BigNumber,
    reportIndex: BigNumber,
    rewardAmount: BigNumber
  ) {
    if (!contract) return;

    try {
      await contract.approve(caseIndex, reportIndex, rewardAmount);
    } catch (error) {
      console.error(error);
    }
  }

  async function depositRefund(caseIndex: BigNumber) {
    if (!contract) return;

    try {
      await contract.refund(caseIndex);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <OligarchfariServiceContext.Provider
      value={{
        casesList,
        addCase,
        addReport,
        approveReport,
        depositRefund,
      }}
    >
      {children}
    </OligarchfariServiceContext.Provider>
  );
}

export const useOligarchfariServiceContext = () =>
  useContext(OligarchfariServiceContext);
