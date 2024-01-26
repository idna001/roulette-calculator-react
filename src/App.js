// App.js
import React, { useState } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';
import styles from './index.css';

const App = () => {
    const [history, setHistory] = useState([]);

    const handleFormSubmit = (number1, number2) => {
        const sum = parseFloat(number1) + parseFloat(number2);
        const newEntry = { number1, number2, sum };

        // Füge das neue Element oben in den Verlauf ein
        setHistory([newEntry, ...history]);
    };

    return (
        <div className={styles.app}>
            <InputComponent onSubmit={handleFormSubmit} />
            {history.length > 0 && <TableComponent history={history} />}
        </div>
    );
};

export default App;
