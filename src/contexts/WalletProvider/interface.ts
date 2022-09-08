import { Signer } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { OligarchFari } from "src/shared/contract/OligarchFari";

export type WalletContextType = {
  account: string;
  connectWallet(): void;
  contract: OligarchFari | null;
  signer: Signer | null;
  provider: Provider | null;
};

export interface WalletProviderProps {
  children: React.ReactNode;
}
