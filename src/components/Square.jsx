import React from 'react';

function Square({ value, onClick }) {
    return (
        <button
            className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-semibold text-4xl h-20 w-20 rounded-lg focus:outline-none transform transition hover:scale-105"
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;
