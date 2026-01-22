import React, { useState } from "react";
import "./App.css";

function Calculator() {
    const [input, setInput] = useState("");

    const numClick = (value) => {
        setInput(input + value);
    };

    const numClear = () => {
        setInput("");
    };

    const numCalculate = () => {
        try {
            setInput(eval(input).toString());
        }
        catch {
            setInput("Error");
        }
    };

    return (
        <div className="cal">
            <input type="text" value={input} readOnly />
            <div className="btn">
                <button onClick={() => numClick("1")}>1</button>
                <button onClick={() => numClick("2")}>2</button>
                <button onClick={() => numClick("3")}>3</button>
                <button onClick={() => numClick("+")}>+</button>

                <button onClick={() => numClick("4")}>4</button>
                <button onClick={() => numClick("5")}>5</button>
                <button onClick={() => numClick("6")}>6</button>
                <button onClick={() => numClick("-")}>-</button>

                <button onClick={() => numClick("7")}>7</button>
                <button onClick={() => numClick("8")}>8</button>
                <button onClick={() => numClick("9")}>9</button>
                <button onClick={() => numClick("*")}>*</button>

                <button onClick={numClear}>C</button>
                <button onClick={() => numClick("0")}>0</button>
                <button onClick={numCalculate}>=</button>
                <button onClick={() => numClick("/")}>/</button>
            </div>
        </div>
    );
}

export default Calculator;