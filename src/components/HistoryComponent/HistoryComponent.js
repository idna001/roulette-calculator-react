import React, { useState, useEffect } from 'react';
import styles from '../TableComponent/TableComponent.module.css';

const HistoryComponent = () => {
    const [numberPairs, setNumberPairs] = useState([]);

    useEffect(() => {
        const storedNumbers = JSON.parse(localStorage.getItem('numbers')) || [];
        setNumberPairs(storedNumbers);
    }, []); // Wird nur einmal beim Laden der Komponente ausgeführt

    return (
        <div>
            <h2>Number Pairs:</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Number 1</th>
                    <th>Number 2</th>
                </tr>
                </thead>
                <tbody>
                {numberPairs.map((pair, index) => (
                    <tr key={index}>
                        <td>{pair.number1}</td>
                        <td>{pair.number2}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryComponent;
