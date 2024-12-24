import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { calculateLogic } from "../utils/logic";

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState(""); // Current input/result
    const [prevValue, setPrevValue] = useState(null); // Previous value
    const [operator, setOperator] = useState(null); // Selected operator
    const [history, setHistory] = useState(""); // Tracks everything typed

    // Handle button clicks for numbers, operators, and equals
    const handleButtonClick = (btn) => {
        if ("0123456789.".includes(btn)) {
            setCurrentInput((prev) => prev + btn); // Append number to current input
            setHistory((prev) => prev + btn); // Add to history
        } else if ("+-*/".includes(btn)) {
            setPrevValue(currentInput); // Store current input as prevValue
            setOperator(btn); // Store operator
            setCurrentInput(""); // Clear input for the next value
            setHistory((prev) => prev + " " + btn + " "); // Add operator to history
        } else if (btn === "=") {
            if (prevValue && operator) {
                const result = calculateLogic(prevValue, operator, currentInput); // Perform calculation
                setCurrentInput(result); // Show result in display
                setPrevValue(null); // Reset prevValue
                setOperator(null); // Reset operator
                setHistory((prev) => prev + " = " + result); // Add result to history
            }
        } else if (btn === "C") {
            // Clear the current input
            setCurrentInput("");
        }
    };

    // Reset everything to the initial state
    const handleReset = () => {
        setCurrentInput("");
        setPrevValue(null);
        setOperator(null);
        setHistory("");
    };

    return (
        <div className="max-w-md p-6 mx-auto bg-gray-900 rounded-lg shadow-md">
            {/* History Display */}
            <div className="p-2 mb-2 text-lg text-gray-300 bg-gray-800 rounded-md">
                {history || "0"} {/* Show "0" if history is empty */}
            </div>
            
            {/* Current Input Display */}
            <Display value={currentInput} />

            {/* Buttons */}
            <Buttons onButtonClick={handleButtonClick} />

            {/* Reset Button */}
            <button
                className="w-full p-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-500"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
};

export default Calculator;
