// App.js
import React, { useState, useEffect } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';
import CatComponent from "./components/CatComponent/CatComponent";
import HistoryComponent from "./components/HistoryComponent/HistoryComponent";
import {numberArray} from "./data/numberArray";

const App = () => {
    const [history, setHistory] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0); // Zustand für den Komponenten-Neu-Render


    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, [refreshKey]);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 36) + 1;
    };

    const searchMatchingNumbers = (sum) => {
        const matchingNumbers = [];
        for (const key in numberArray) {
            const [num1, num2] = numberArray[key];
            if (parseInt(key) === sum) {
                matchingNumbers.push(num1, num2);
            }
        }
        return matchingNumbers;
    }

    const handleFormSubmit = (number1, number2) => {
        let sum = parseFloat(number1) + parseFloat(number2);
        if (sum > 36 || sum < 10) {
            sum = generateRandomNumber();
        }
        const matchingNumbers = searchMatchingNumbers(sum);
        const thirdNumber = matchingNumbers[0];
        const fourthNumber = matchingNumbers[1];

        const digitSum = Array.from(sum.toString()).reduce((acc, digit) => acc + parseInt(digit), 0);
        const matchingNumbersQueer = searchMatchingNumbers(digitSum);
        const fifth = matchingNumbersQueer[0];
        const sixth = matchingNumbersQueer[1];
        const randomNumber = generateRandomNumber();
        const numbers = [sum, digitSum, thirdNumber, fourthNumber, fifth, sixth, randomNumber];
        const newEntry = {
            sum: sum,
            digitSum: digitSum,
            numbers: numbers
        };

        localStorage.setItem('history', JSON.stringify([newEntry]));
        const existingNumbers = JSON.parse(localStorage.getItem('numbers')) || [];
        const updatedNumbers = [{ number1, number2 }, ...existingNumbers];

        localStorage.setItem('numbers', JSON.stringify(updatedNumbers));
        setRefreshKey(prevKey => prevKey + 1);
    };

    const handleClearStorage = () => {
        localStorage.removeItem('history');
        localStorage.removeItem('numbers');
        setHistory([]);
        setNumbers([]);
        setRefreshKey(prevKey => prevKey + 1);
    };
    // 3. nachbarzahl
    // 4. nachbarzahl links
    // 5. nachbarzahl rechts von der 6
    // 6. nachbarzahl links von quer summe
    // 7. zufallszahl zwischen 1 und quer summe
    return (
        <div className='app'>
            <img src={require('./img/logo.png')} alt="logo" className='logo' />
            <h1 className='title'>Lucky cats</h1>
            <InputComponent onSubmit={handleFormSubmit} />
{/*
                <TableComponent history={history} />
*/}
            <CatComponent history={history} refreshKey={refreshKey} />

            {history.length > 0 && (
                <React.Fragment>
                    <HistoryComponent numbers={numbers} refreshKey={refreshKey} />

                    <button onClick={handleClearStorage} className='clearButton'>
                        Clear History
                    </button>
                </React.Fragment>
            )}

        </div>
    );
};

export default App;
