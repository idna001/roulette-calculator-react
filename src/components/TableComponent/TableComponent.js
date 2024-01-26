// TableComponent.js
import React from 'react';
import styles from './TableComponent.module.css';

const calculateCrossSum = (number) => {
    return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

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
                <React.Fragment key={index}>
                    <tr>
                        <td rowSpan="2">{entry.number1}</td>
                        <td rowSpan="2">{entry.number2}</td>
                        <td className={styles.calculation}>{entry.sum - 1}</td>
                        <td className={styles.sum}>{entry.sum}</td>
                        <td className={styles.calculation}>{entry.sum + 1}</td>
                    </tr>
                    <tr>
                        <td>{calculateCrossSum(entry.sum - 1)}</td>
                        <td>{calculateCrossSum(entry.sum)}</td>
                        <td>{calculateCrossSum(entry.sum + 1)}</td>
                    </tr>
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
