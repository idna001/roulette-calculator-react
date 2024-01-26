// TableComponent.js
import React from 'react';
import styles from './TableComponent.module.css';

const TableComponent = ({ history }) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Number 1</th>
                <th>Number 2</th>
                <th colSpan="3">Calculation</th>
            </tr>
            </thead>
            <tbody>
            {history.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.number1}</td>
                    <td>{entry.number2}</td>
                    <td>{entry.sum - 1}</td>
                    <td style={{ backgroundColor: getColor(entry.sum) }}>{entry.sum}</td>
                    <td>{entry.sum + 1}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

// Funktion, um Farbe basierend auf der Summe zu bestimmen
const getColor = (sum) => {
    if (sum < 0) {
        return 'red'; // Setze die Farbe auf Rot, wenn die Summe negativ ist
    } else if (sum > 0) {
        return 'green'; // Setze die Farbe auf Grün, wenn die Summe positiv ist
    } else {
        return 'black'; // Setze die Farbe auf Schwarz, wenn die Summe null ist
    }
};

export default TableComponent;
