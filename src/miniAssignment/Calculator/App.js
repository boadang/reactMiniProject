import { useState } from 'react';
import './App.css';

function CalculatorApp() {
    const [displayValue, setDisplayValue] = useState('0'); // Giá trị hiển thị trên màn hình
    const [firstOperand, setFirstOperand] = useState(null); // Toán hạng đầu tiên
    const [operator, setOperator] = useState(null); // Toán tử đang chờ
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false); // Trạng thái chờ toán hạng thứ 2

    const inputDigit = (digit) => {
        if (waitingForSecondOperand) {
            setDisplayValue(digit);
            setWaitingForSecondOperand(false);
        } else {
            // Nếu displayValue đang là '0', thay thế bằng digit, ngược lại thêm digit vào
            setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
        }
    };

    const inputDecimal = () => {
        // Chỉ thêm dấu thập phân nếu chưa có
        if (waitingForSecondOperand) {
            setDisplayValue('0.');
            setWaitingForSecondOperand(false);
            return;
        }
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const resultValue = calculate(firstOperand, inputValue, operator);
            setDisplayValue(String(resultValue));
            setFirstOperand(resultValue);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (firstNum, secondNum, op) => {
        switch (op) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                return firstNum / secondNum;
            default:
                return secondNum;
        }
    };

    return (
        <div className="calculatorApp">
            <h1>Calculator</h1>
            <input
                type="text" // Input type text để hiển thị cả số và dấu
                className="calculator-screen"
                value={displayValue}
                readOnly // Không cho phép người dùng gõ trực tiếp
            />

            <div className="calculator-keys">
                <div className="buttonGroup">
                    <button onClick={() => inputDigit('7')}>7</button>
                    <button onClick={() => inputDigit('8')}>8</button>
                    <button onClick={() => inputDigit('9')}>9</button>
                    <button onClick={() => performOperation('/')} className="operator-btn">/</button>

                    <button onClick={() => inputDigit('4')}>4</button>
                    <button onClick={() => inputDigit('5')}>5</button>
                    <button onClick={() => inputDigit('6')}>6</button>
                    <button onClick={() => performOperation('*')} className="operator-btn">*</button>

                    <button onClick={() => inputDigit('1')}>1</button>
                    <button onClick={() => inputDigit('2')}>2</button>
                    <button onClick={() => inputDigit('3')}>3</button>
                    <button onClick={() => performOperation('-')} className="operator-btn">-</button>

                    <button onClick={() => inputDigit('0')}>0</button>
                    <button onClick={inputDecimal}>.</button>
                    <button onClick={() => performOperation('=')} className="equal-sign">=</button>
                    <button onClick={() => performOperation('+')} className="operator-btn">+</button>
                </div>

                <div className="otherButtons">
                    <button onClick={clearDisplay} className="all-clear">AC</button>
                </div>
            </div>
        </div>
    );
}

export default CalculatorApp;