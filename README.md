# Rock Paper Scissors on Stellar (GDG Event)

A simple full-stack dApp: a Soroban smart contract for Rock-Paper-Scissors plus a React + Vite frontend using Freighter wallet.

## 🚀 Project Overview

- **Contract:** Soroban Rust smart contract (`play` function) that compares a player move to a fixed computer move (`rock`) and returns `win`, `draw`, or `lose`.
- **Frontend:** React app that connects to Freighter, sends an `invokeHostFunction` transaction to the contract on Stellar testnet, and shows transaction status.
- **Goal:** Build and run local frontend, then interact with the contract using a Freighter wallet.

## 📁 Repository Structure

- `ROCKPAPER/Contract/Contract/rps_contract/contracts/hello-world/src/lib.rs` - Soroban contract implementation.
- `ROCKPAPER/Frontend/src/App.jsx` - React user interface.
- `ROCKPAPER/Frontend/src/contract.js` - Stellar SDK + Freighter transaction helper.
- `ROCKPAPER/Frontend/src/wallet.js` - Freighter wallet connect helper.

## � Contract Address

The frontend currently uses this deployed contract ID:

`CAFPUVG553MJ5M5O5Q3MLXNGVVSNSWXL6UWEX3RV5QFWEUKQDBXVEG3V`

If you deploy a new contract, update `CONTRACT_ID` in `ROCKPAPER/Frontend/src/contract.js`.

## �🧠 How the contract works

Contract function `play(player_move: Symbol) -> Symbol` does:
1. Computer move is hardcoded to `rock`.
2. If `player_move == rock`, returns `draw`.
3. If player wins rock-paper-scissors, returns `win`.
4. Otherwise returns `lose`.

## ⚙️ Setup

### 1) Install Prerequisites

- [Rust + Cargo](https://www.rust-lang.org/tools/install)
- [Soroban CLI](https://soroban.stellar.org/docs/)
- [Node.js 20+](https://nodejs.org/)
- [Freighter Wallet](https://www.freighter.app/) with testnet account

### 2) Build and deploy contract (optional for local testing)

From `ROCKPAPER/Contract/Contract/rps_contract`:

```bash
cd ROCKPAPER/Contract/Contract/rps_contract
cargo build --release
```

Deploy to testnet using Soroban CLI (if you want to update contract ID):

```bash
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/hello_world.wasm --network testnet
```

> Note: The frontend currently uses a hardcoded contract ID in `ROCKPAPER/Frontend/src/contract.js`.

### 3) Run frontend

```bash
cd ROCKPAPER/Frontend
npm install
npm run dev
```

Open the Vite dev server URL (usually `http://localhost:5173`).

## 🎮 How to use

1. Click **Connect Freighter Wallet**.
2. Choose one of the moves: **Rock**, **Paper**, or **Scissors**.
3. Confirm the transaction in Freighter.
4. The app displays transaction status and result message.

## 🔧 Important files to edit

- `ROCKPAPER/Frontend/src/contract.js`
  - `CONTRACT_ID` (set your deployed contract ID)
  - `server` endpoint uses Soroban testnet currently.
- `ROCKPAPER/Contract/Contract/rps_contract/contracts/hello-world/src/lib.rs`
  - Update game logic and moves.

## ✅ Quick commands

```bash
# Start frontend
cd ROCKPAPER/Frontend
npm run dev

# Build frontend for production
npm run build

# Build contract
cd ROCKPAPER/Contract/Contract/rps_contract
cargo build --release
```

## 🧪 Notes

- This is demo code: contract uses deterministic fixed CPU move and no randomness.
- In production, do not hardcode contract IDs into client code; use config/env variables.
- Smart contract errors can be inspected using Soroban CLI logs.

## �️ Screenshot

Below is a sample screenshot of the app UI after connecting a wallet and playing a move. Replace this with your own screenshot:

![Rock Paper Scissors Stellar dApp](./screenshot.png)

## �📚 Learn more

- [Stellar Soroban docs](https://soroban.stellar.org/docs)
- [Freighter wallet docs](https://developers.stellar.org/docs/freighter/)
- [Vite + React docs](https://vitejs.dev)
