import React, { useState, useEffect } from 'react';
import InputComponent from '../components/InputComponent/InputComponent';
import CatComponent from "../components/CatComponent/CatComponent";
import HistoryComponent from "../components/HistoryComponent/HistoryComponent";
import { numberArray } from "../data/numberArray";

const Cats = () => {
    const [catsHistory, setCatsHistory] = useState([]);
    const [catsNumbers, setCatsNumbers] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0); // Zustand für den Komponenten-Neu-Render

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('catsHistory'));
        if (storedHistory) {
            setCatsHistory(storedHistory);
        }
        const storedNumbers = JSON.parse(localStorage.getItem('catsNumbers'));
        if (storedNumbers) {
            setCatsNumbers(storedNumbers);
        } else {
            setCatsNumbers([]); // Ensure numbers is always defined
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
        const soundEffect = new Audio();
        soundEffect.autoplay = true;
        soundEffect.src = '../audio/cat-meow.mp3'
        soundEffect.play()
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

        localStorage.setItem('catsHistory', JSON.stringify([newEntry]));
        const existingNumbers = JSON.parse(localStorage.getItem('catsNumbers')) || [];
        const updatedNumbers = [{ number1, number2 }, ...existingNumbers];

        localStorage.setItem('catsNumbers', JSON.stringify(updatedNumbers));
        setRefreshKey(prevKey => prevKey + 1);
    };

    const handleClearStorage = () => {
        localStorage.removeItem('catsHistory');
        localStorage.removeItem('catsNumbers');
        setCatsHistory([]);
        setCatsNumbers([]);
        setRefreshKey(prevKey => prevKey + 1);
    };

    return (
        <div>
            <img src={require('../img/logo.png')} alt="logo" className='logo' />
            <h1 className='title'>Lucky cats</h1>
            <InputComponent onSubmit={handleFormSubmit} />
            <CatComponent history={catsHistory} refreshKey={refreshKey} />

            {catsNumbers.length > 0 && (
                <React.Fragment>
                    <HistoryComponent numbers={catsNumbers} refreshKey={refreshKey} />

                    <button onClick={handleClearStorage} className='clearButton'>
                        Clear History
                    </button>
                </React.Fragment>
            )}
        </div>
    );
};

export default Cats;