export const network = {
  testnet: {
    chainId: `0x${Number(1313161555).toString(16)}`,
    chainName: "Aurora Testnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://testnet.aurora.dev/"],
    blockExplorerUrls: ["https://testnet.aurorascan.dev/"],
  },
};
