/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace OligarchFari {
  export type ReportStruct = {
    reporter: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    urlProofs: PromiseOrValue<string>;
    isApproved: PromiseOrValue<boolean>;
  };

  export type ReportStructOutput = [string, string, string, boolean] & {
    reporter: string;
    description: string;
    urlProofs: string;
    isApproved: boolean;
  };
}

export interface OligarchFariInterface extends utils.Interface {
  functions: {
    "approve(uint256,uint256,uint256)": FunctionFragment;
    "closeCase(uint256)": FunctionFragment;
    "createCase(string,string,uint256,uint256)": FunctionFragment;
    "getCase(uint256)": FunctionFragment;
    "getCaseCounter()": FunctionFragment;
    "getReport(uint256,uint256)": FunctionFragment;
    "refund(uint256)": FunctionFragment;
    "report(uint256,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "closeCase"
      | "createCase"
      | "getCase"
      | "getCaseCounter"
      | "getReport"
      | "refund"
      | "report"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "closeCase",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createCase",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCase",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCaseCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReport",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "report",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closeCase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createCase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCaseCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReport", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;

  events: {};
}

export interface OligarchFari extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OligarchFariInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closeCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createCase(
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      deposit_: PromiseOrValue<BigNumberish>,
      endDate_: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        OligarchFari.ReportStructOutput[]
      ] & {
        owner: string;
        name: string;
        description: string;
        deposit: BigNumber;
        startDate: BigNumber;
        endDate: BigNumber;
        status: number;
        reports: OligarchFari.ReportStructOutput[];
      }
    >;

    getCaseCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReport(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        reporter: string;
        description: string;
        urlProofs: string;
        isApproved: boolean;
      }
    >;

    refund(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    report(
      caseIndex_: PromiseOrValue<BigNumberish>,
      description_: PromiseOrValue<string>,
      urlProofs_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    caseIndex_: PromiseOrValue<BigNumberish>,
    reportIndex_: PromiseOrValue<BigNumberish>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closeCase(
    caseIndex_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createCase(
    name_: PromiseOrValue<string>,
    description_: PromiseOrValue<string>,
    deposit_: PromiseOrValue<BigNumberish>,
    endDate_: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCase(
    caseIndex_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      OligarchFari.ReportStructOutput[]
    ] & {
      owner: string;
      name: string;
      description: string;
      deposit: BigNumber;
      startDate: BigNumber;
      endDate: BigNumber;
      status: number;
      reports: OligarchFari.ReportStructOutput[];
    }
  >;

  getCaseCounter(overrides?: CallOverrides): Promise<BigNumber>;

  getReport(
    caseIndex_: PromiseOrValue<BigNumberish>,
    reportIndex_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, boolean] & {
      reporter: string;
      description: string;
      urlProofs: string;
      isApproved: boolean;
    }
  >;

  refund(
    caseIndex_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  report(
    caseIndex_: PromiseOrValue<BigNumberish>,
    description_: PromiseOrValue<string>,
    urlProofs_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    closeCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createCase(
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      deposit_: PromiseOrValue<BigNumberish>,
      endDate_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        OligarchFari.ReportStructOutput[]
      ] & {
        owner: string;
        name: string;
        description: string;
        deposit: BigNumber;
        startDate: BigNumber;
        endDate: BigNumber;
        status: number;
        reports: OligarchFari.ReportStructOutput[];
      }
    >;

    getCaseCounter(overrides?: CallOverrides): Promise<BigNumber>;

    getReport(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        reporter: string;
        description: string;
        urlProofs: string;
        isApproved: boolean;
      }
    >;

    refund(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    report(
      caseIndex_: PromiseOrValue<BigNumberish>,
      description_: PromiseOrValue<string>,
      urlProofs_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approve(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closeCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createCase(
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      deposit_: PromiseOrValue<BigNumberish>,
      endDate_: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCaseCounter(overrides?: CallOverrides): Promise<BigNumber>;

    getReport(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    refund(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    report(
      caseIndex_: PromiseOrValue<BigNumberish>,
      description_: PromiseOrValue<string>,
      urlProofs_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closeCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createCase(
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      deposit_: PromiseOrValue<BigNumberish>,
      endDate_: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCase(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCaseCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReport(
      caseIndex_: PromiseOrValue<BigNumberish>,
      reportIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refund(
      caseIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    report(
      caseIndex_: PromiseOrValue<BigNumberish>,
      description_: PromiseOrValue<string>,
      urlProofs_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
