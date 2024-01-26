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
                <th>Sum</th>
            </tr>
            </thead>
            <tbody>
            {history.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.number1}</td>
                    <td>{entry.number2}</td>
                    <td>{entry.sum}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
