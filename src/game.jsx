// game.js
import React, { createContext, useContext, useState } from 'react';
import Board from './components/Board';
import RestartButton from './components/RestartButton';

// Create a context to hold the game state
const GameContext = createContext();

function GameProvider({ children }) {
    const [squares, setSquares] = useState(Array(9).fill(null));

    // Function to calculate the next value ('X' or 'O')
    const calculateNextValue = () => squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';

    // Function to check if there is a winner
    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Function to calculate the game status
    const calculateStatus = () => {
        const winner = calculateWinner(squares);
        if (winner) {
            return `Winner: ${winner}`;
        } else if (squares.every((square) => square !== null)) {
            return 'Draw!';
        } else {
            return `Next player: ${calculateNextValue()}`;
        }
    };

    // Function to handle selecting a square
    const selectSquare = (square) => {
        if (squares[square] || calculateWinner(squares)) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[square] = calculateNextValue();
        setSquares(newSquares);
    };

    // Function to restart the game
    const restart = () => {
        setSquares(Array(9).fill(null));
    };

    // Provide the game state and functions through the context
    const contextValue = {
        squares,
        selectSquare,
        restart,
        nextValue: calculateNextValue(),
        winner: calculateWinner(),
        status: calculateStatus(),
    };

    return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
}

function Game() {
    return (
        <div className="flex flex-col justify-center items-center w-100 h-screen bg-gradient-to-r from-gray-800 to-gray-900 font-serif">
            <GameProvider>
                <Board />
                <RestartButton />
            </GameProvider>
        </div>
    );
}

export default Game;
export { GameContext, GameProvider };
