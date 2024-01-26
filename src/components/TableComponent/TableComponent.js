import React from 'react';
import styles from './TableComponent.module.css';
const TableComponent = ({ result }) => {
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
            <tr>
                <td>{result.number1}</td>
                <td>{result.number2}</td>
                <td>{result.sum}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default TableComponent;