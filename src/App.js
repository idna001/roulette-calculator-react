// App.js
import React, { useState, useEffect } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';

const App = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, []);

    const handleFormSubmit = (number1, number2) => {
        let sum = parseFloat(number1) + parseFloat(number2);
        if (sum > 36 || sum === 0) {
            sum = Math.floor(Math.random() * 36) + 1;
        }
        const isDuplicate = history.some(entry => entry.number1 === number1 && entry.number2 === number2);
        if (isDuplicate) {
            sum = Math.floor(Math.random() * 36) + 1;
        }
        const newEntry = { number1, number2, sum };

        setHistory([newEntry, ...history]);
        localStorage.setItem('history', JSON.stringify([newEntry, ...history]));
    };


    const handleClearStorage = () => {
        localStorage.removeItem('history');
        setHistory([]);
    };

    return (
        <div className='app'>
            <img src={require('./img/logo.png')} alt="logo" className='logo' />
            <h1 className='title'>Number Cruncher</h1>
            <InputComponent onSubmit={handleFormSubmit} />
            {history.length > 0 && <TableComponent history={history} />}
            {history.length > 0 && (
                <button onClick={handleClearStorage} className='clearButton'>
                    Clear History
                </button>
            )}
        </div>
    );
};

export default App;
