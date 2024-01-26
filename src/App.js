// App.js
import React, { useState, useEffect } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';
import styles from './index.css';

const App = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Lade den Verlauf aus dem Local Storage, wenn verfügbar
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, []); // Der leere Array bewirkt, dass dieser Effekt nur einmal nach der Montage ausgeführt wird

    const handleFormSubmit = (number1, number2) => {
        const sum = parseFloat(number1) + parseFloat(number2);
        const newEntry = { number1, number2, sum };

        // Füge das neue Element oben in den Verlauf ein
        setHistory([newEntry, ...history]);

        // Speichere den aktualisierten Verlauf im Local Storage
        localStorage.setItem('history', JSON.stringify([newEntry, ...history]));
    };

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>Number Cruncher</h1>
            <InputComponent onSubmit={handleFormSubmit} />
            {history.length > 0 && <TableComponent history={history} />}
        </div>
    );
};

export default App;
