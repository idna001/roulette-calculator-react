// TableComponent.js
import React from 'react';
import styles from './TableComponent.module.css';

const calculateCrossSum = (number) => {
    return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
};

const TableComponent = ({ history }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nr 1</th>
                    <th>Nr 2</th>
                    <th colSpan="4">Next lucky numbers</th>
                </tr>
            </thead>
            <tbody>
            {history.map((entry, index) => (
                <React.Fragment key={index}>
                    <tr>
                        <td rowSpan="3">{entry.number1}</td>
                        <td rowSpan="3">{entry.number2}</td>
                        <td className={styles.calculation}>{entry.sum - 1}</td>
                        <td colSpan="2" className={styles.calculation}>{entry.sum}</td>
                        <td className={styles.calculation}>{entry.sum + 1}</td>
                    </tr>
                    <tr>
                        <td colSpan="1">{calculateCrossSum(entry.sum) - 1}</td>
                        <td colSpan="2">{calculateCrossSum(entry.sum)}</td>
                        <td colSpan="1">{calculateCrossSum(entry.sum) + 1}</td>
                    </tr>
                    <tr>
                        <td className={styles.sum}>{generateRandomNumber()}</td>
                        <td className={styles.sum}>{generateRandomNumber()}</td>
                        <td className={styles.sum}>{generateRandomNumber()}</td>
                        <td className={styles.sum}>{generateRandomNumber()}</td>
                    </tr>
                    <tr>
                        <td colSpan="7"></td>
                    </tr>
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
