import { Signer } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
// import { BCDeimosContract } from "src/shared/common/contract/index";

export type WalletContextType = {
  account: string;
  connectWallet(): void;
  // contract: BCDeimosContract | null;
  signer: Signer | null;
  provider: Provider | null;
};

export interface WalletProviderProps {
  children: React.ReactNode;
}
