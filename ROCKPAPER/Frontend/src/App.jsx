import { useState } from "react";
import { connectWallet } from "./wallet";
import { play } from "./contract";

function App() {

  const [wallet, setWallet] = useState(null);
  const [result, setResult] = useState("");

  const connect = async () => {
    const address = await connectWallet();
    setWallet(address);
  };

  const playGame = async (move) => {
    try {
      const response = await play(move);
      console.log(response);

      if(response){
        setResult("Transaction sent to Stellar!");
      }

    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Rock Paper Scissors - Stellar dApp</h1>

      {!wallet ? (
        <button onClick={connect}>Connect Freighter Wallet</button>
      ) : (
        <p>Connected Wallet: {wallet}</p>
      )}

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => playGame("rock")}>Rock</button>
        <button onClick={() => playGame("paper")}>Paper</button>
        <button onClick={() => playGame("scissors")}>Scissors</button>
      </div>

      <h2 style={{ marginTop: "40px" }}>{result}</h2>

    </div>
  );
}

export default App;