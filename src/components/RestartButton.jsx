// components/RestartButton.js
import React, { useContext } from 'react';
import { GameContext } from '../game';

function RestartButton() {
    const { restart } = useContext(GameContext);

    return (
        <button
            className="mt-12 bg-green-500 text-white font-bold py-4 px-8 rounded-full focus:outline-none transform transition hover:bg-green-600"
            onClick={restart}
        >
            Restart
        </button>
    );
}

export default RestartButton;
