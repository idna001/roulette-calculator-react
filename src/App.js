// App.js
import React, { useState, useEffect } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';
import styles from './index.css';

const App = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, []);

    const handleFormSubmit = (number1, number2) => {
        const sum = parseFloat(number1) + parseFloat(number2);
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
