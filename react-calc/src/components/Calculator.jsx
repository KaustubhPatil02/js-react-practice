import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { calculateLogic } from "../utils/logic";

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState("");
    const [prevValue, setPrevValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleButtonClick = (btn) => {
        if ("0123456789.".includes(btn)) {
            setCurrentInput((prev) => prev + btn);
        } else if ("+-*/".includes(btn)) {
            setPrevValue(currentInput);
            setOperator(btn);
            setCurrentInput("");
        } else if (btn === "=") {
            if (prevValue && operator) {
                const result = calculateLogic(prevValue, operator, currentInput);
                setCurrentInput(result);
                setPrevValue(null);
                setOperator(null);
            }
        } else {
            setCurrentInput("");
            setPrevValue(null);
            setOperator(null);
        }
    };

    return (
        <div className="max-w-md p-6 mx-auto bg-gray-900 rounded-lg shadow-md">
            <Display value={currentInput} />
            <Buttons onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;
