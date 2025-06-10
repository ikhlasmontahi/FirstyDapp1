import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BANK_ADDRESS } from "./constants";
import abi from "./abi/Bank.json";

export default function App() {
  const [account, setAccount] = useState(null);

  const connect = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    setAccount(await signer.getAddress());
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Mio Bank DApp</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}