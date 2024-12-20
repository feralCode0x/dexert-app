import { Sepolia, Mainnet } from '@usedapp/core'
import env from "./env.js";

export const ROUTER_ADDRESS = env.ROUTER_CONTRACT_ADDRESS;

export const config: config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: env.MAINNET_INFURA_API,
    [Sepolia.chainId]: env.SEPOLIA_INFURA_API
  },
};