# 🎮 Rock Paper Scissors dApp on Stellar Blockchain

![Stellar](https://img.shields.io/badge/Stellar-Soroban-blue)
![React](https://img.shields.io/badge/Frontend-React-green)
![Vite](https://img.shields.io/badge/Build-Vite-purple)
![Rust](https://img.shields.io/badge/Contract-Rust-orange)

---

## 🚀 Project Overview

A decentralized Rock-Paper-Scissors game built on the Stellar Soroban smart contract platform.

This project demonstrates:

* Smart contract development using Rust
* Blockchain interaction via frontend (React)
* Wallet integration using Freighter

Users can play the game by signing transactions through their wallet, making it a real blockchain-based application.

---

## 🎥 Demo

(Add your demo video or GIF here)

---

## 🏗️ Architecture

Frontend (React + Vite)
↓
Freighter Wallet
↓
Stellar Soroban Smart Contract (Rust)

---

## ✨ Features

* Blockchain-based game logic
* Smart contract execution on Stellar
* Freighter wallet integration
* React-based UI
* Real transaction interaction

---

## 📁 Repository Structure

* `ROCKPAPER/Contract/Contract/rps_contract/contracts/hello-world/src/lib.rs` - Smart contract
* `ROCKPAPER/Frontend/src/App.jsx` - UI
* `ROCKPAPER/Frontend/src/contract.js` - Blockchain interaction
* `ROCKPAPER/Frontend/src/wallet.js` - Wallet connection

---

## 🔗 Contract Address

`CAFPUVG553MJ5M5O5Q3MLXNGVVSNSWXL6UWEX3RV5QFWEUKQDBXVEG3V`

---

## 🧠 Smart Contract Logic

Function: `play(player_move: Symbol) -> Symbol`

* Computer move: `rock` (fixed)
* Returns:

  * `win` → player wins
  * `draw` → same move
  * `lose` → player loses

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-link>
cd ROCKPAPER
```

### 2. Run Frontend

```bash
cd Frontend
npm install
npm run dev
```

### 3. Open Browser

http://localhost:5173

---

## 🔧 Build Smart Contract

```bash
cd ROCKPAPER/Contract/Contract/rps_contract
cargo build --release
```

---

## 🎮 How to Use

1. Connect Freighter Wallet
2. Choose Rock / Paper / Scissors
3. Approve transaction
4. View result

---

## 🔮 Future Improvements

* Add randomness to computer move
* Multiplayer support
* Better UI/UX
* Deploy on mainnet

---

## ⚠️ Note

This project is built for learning and demonstration of blockchain integration using Stellar Soroban.

---

## 📷 Screenshot

![App Screenshot](App.png)

---

## 📚 Learn More

* https://soroban.stellar.org/docs
* https://developers.stellar.org/docs/freighter/
* https://vitejs.dev
