import { getUserInfo } from "@stellar/freighter-api";

export const connectWallet = async () => {
  try {
    const user = await getUserInfo();
    return user.publicKey;
  } catch (error) {
    console.error("Wallet connection failed", error);
  }
};