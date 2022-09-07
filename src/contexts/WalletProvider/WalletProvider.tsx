import { createContext, useContext, useEffect, useState } from "react";
import { ethers, providers, Signer } from "ethers";
// import abi from "src/shared/common/configs/abi.json";
// import { BCDeimosContract } from "src/shared/common/contract/index";
import { network } from "src/shared/config/network";
// import { contractAddress } from "src/shared/common/configs/contractAddress";
import { WalletContextType, WalletProviderProps } from "./interface";
import { openLinkInNewTab } from "src/shared/common/helpers/openLinkInNewTab";

declare global {
  interface Window {
    ethereum: any;
  }
}

const initialWalletState: WalletContextType = {
  account: "",
  connectWallet: () => undefined,
  // contract: null,
  signer: null,
  provider: null,
};

export const WalletServiceContext =
  createContext<WalletContextType>(initialWalletState);

export function WalletServiceProvider({ children }: WalletProviderProps) {
  const metamaskInstallerLink = "https://metamask.io/download/";

  const [address, setAddress] = useState<string | null>(null);
  const [account, setAccount] = useState<string>("");
  const [provider, setProvider] = useState<providers.JsonRpcProvider | null>(
    null
  );
  const [signer, setSigner] = useState<Signer | null>(null);
  // const [contract, setContract] = useState<BCDeimosContract | null>(null);

  function accountChangeHandler(newAccount: string) {
    setAccount(newAccount);
  }

  async function connectWallet(): Promise<void> {
    console.log("connect wallet");
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        accountChangeHandler(accounts[0]);
        changeNetwork();
      } else {
        openLinkInNewTab(metamaskInstallerLink);
      }
    } catch (err) {
      console.error("error", err);
    }
  }

  async function changeNetwork() {
    try {
      if (!window.ethereum) openLinkInNewTab(metamaskInstallerLink);

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...network["testnet"],
          },
        ],
      });
    } catch (err) {
      console.error("error", err);
    }
  }

  // function updateEthers() {
  //   if (!address) return;
  //   if (account) {
  //     const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //     setProvider(tempProvider);

  //     const tempSigner = tempProvider.getSigner();
  //     setSigner(tempSigner);

  //     const tempContract = new ethers.Contract(address, abi, tempSigner);
  //     setContract(tempContract as BCDeimosContract);
  //   } else {
  //     const tempProvider = new ethers.providers.JsonRpcProvider(
  //       networkConfig[environment as keyof typeof networkConfig].rpcUrls[0]
  //     );
  //     setProvider(tempProvider);

  //     const tempSigner = tempProvider.getSigner(
  //       "0x19A175f97fAdcA33bb38BA3e2c37e35C507a71E8" // TODO: change this workaround
  //     );
  //     setSigner(tempSigner);

  //     const tempContract = new ethers.Contract(address, abi, tempSigner);
  //     setContract(tempContract as BCDeimosContract);
  //   }
  // }

  // useEffect(() => {
  //   updateEthers();
  // }, [account, address]);

  return (
    <WalletServiceContext.Provider
      value={{
        connectWallet,
        account,
        // contract,
        signer,
        provider,
      }}
    >
      {children}
    </WalletServiceContext.Provider>
  );
}

export const useWalletServiceContext = () => useContext(WalletServiceContext);
