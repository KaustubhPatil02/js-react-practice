import React from 'react';

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    return (
        <div className="grid grid-cols-4 gap-2 mt-4">
            {buttons.map((btn) => (
                <button
                    key={btn}
                    className="p-4 text-white bg-gray-700 rounded-md hover:bg-gray-600"
                    onClick={() => onButtonClick(btn)}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default Buttons;
