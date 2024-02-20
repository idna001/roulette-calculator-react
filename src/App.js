// App.js
import React, { useState, useEffect } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';
import CatComponent from "./components/CatComponent/CatComponent";

const App = () => {
    const [history, setHistory] = useState([]);
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, []);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 36) + 1;
    };

    const handleFormSubmit = (number1, number2) => {
        const sum = parseFloat(number1) + parseFloat(number2);
        const digitSum = Array.from(sum.toString()).reduce((acc, digit) => acc + parseInt(digit), 0);

        const randomNumber1 = Math.floor(Math.random() * sum) + 1;
        const randomNumber2 = Math.floor(Math.random() * sum) + 1;

        const minNumber = Math.min(parseFloat(number1), parseFloat(number2));
        const maxNumber = Math.max(parseFloat(number1), parseFloat(number2));
        const randomNumber3 = Math.floor(Math.random() * (maxNumber - minNumber - 1)) + minNumber + 1;
        const numbers = [sum, digitSum, randomNumber1, randomNumber2, randomNumber3];

        const newEntry = {
            sum: sum,
            digitSum: digitSum,
            numbers: numbers
        };
        localStorage.setItem('history', JSON.stringify([newEntry]));

        const existingNumbers = JSON.parse(localStorage.getItem('numbers')) || [];
        const updatedNumbers = [{ number1, number2 }, ...existingNumbers];

        localStorage.setItem('numbers', JSON.stringify(updatedNumbers));
    };






    const handleClearStorage = () => {
        localStorage.removeItem('history');
        localStorage.removeItem('number');

        setHistory([]);
    };

    return (
        <div className='app'>
            <img src={require('./img/logo.png')} alt="logo" className='logo' />
            <h1 className='title'>Number Cruncher</h1>
            <InputComponent onSubmit={handleFormSubmit} />

{/*
                <TableComponent history={history} />
*/}
            <CatComponent history={history}/>


            {history.length > 0 && (
                <button onClick={handleClearStorage} className='clearButton'>
                    Clear History
                </button>
            )}
        </div>
    );
};

export default App;
