// components/Board.js
import React, { useContext } from 'react';
import { GameContext } from '../game';
import Square from './Square';

function Board() {
    const { squares, selectSquare, status } = useContext(GameContext);

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => selectSquare(i)} />;
    }

    return (
        <div className="w-100 mt-16 p-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-2xl">
            <div className="mb-8 text-5xl font-extrabold text-center">{status}</div>
            <div className="flex justify-around">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="flex justify-around">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="flex justify-around">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;
