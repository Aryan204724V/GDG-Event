import { rpc, TransactionBuilder, Networks, BASE_FEE } from "@stellar/stellar-sdk";
import { getUserInfo, signTransaction } from "@stellar/freighter-api";

const CONTRACT_ID = "CAFPUVG553MJ5M5O5Q3MLXNGVVSNSWXL6UWEX3RV5QFWEUKQDBXVEG3V";

const server = new rpc.Server("https://soroban-testnet.stellar.org");

export async function play(move) {
  const user = await getUserInfo();
  const account = await server.getAccount(user.publicKey);

  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation({
      type: "invokeHostFunction",
      func: {
        type: "HostFunctionTypeHostFunctionTypeInvokeContract",
        contractId: CONTRACT_ID,
        functionName: "play",
        args: [move],
      },
    })
    .setTimeout(30)
    .build();

  const signed = await signTransaction(tx.toXDR(), { network: "TESTNET" });

  const txResult = await server.sendTransaction(
    TransactionBuilder.fromXDR(signed, Networks.TESTNET)
  );

  return txResult;
}