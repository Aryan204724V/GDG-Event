#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Symbol, symbol_short};

#[contract]
pub struct RockPaperScissors;

#[contractimpl]
impl RockPaperScissors {

    pub fn play(_env: Env, player_move: Symbol) -> Symbol {

        let computer_move = symbol_short!("rock");

        if player_move == computer_move {
            return symbol_short!("draw");
        }

        if player_move == symbol_short!("rock") && computer_move == symbol_short!("scissors") {
            return symbol_short!("win");
        }

        if player_move == symbol_short!("paper") && computer_move == symbol_short!("rock") {
            return symbol_short!("win");
        }

        if player_move == symbol_short!("scissors") && computer_move == symbol_short!("paper") {
            return symbol_short!("win");
        }

        symbol_short!("lose")
    }
}