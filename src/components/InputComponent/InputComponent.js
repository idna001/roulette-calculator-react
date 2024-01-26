// InputComponent.js
import React, { useState } from 'react';
import styles from './InputComponent.module.css';

const InputComponent = ({ onSubmit }) => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateInput(number1) && validateInput(number2)) {
            onSubmit(number1, number2);
            setError('');
            setNumber1('');
            setNumber2('');
        } else {
            setError('Please enter numbers between 1 and 36 for both inputs.');
        }
    };

    const validateInput = (value) => {
        const number = parseFloat(value);
        return !isNaN(number) && number >= 1 && number <= 36;
    };

    return (
        <div className={styles.inputContainer}>
            <h2 className={styles.title}>Roulette Calc</h2>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label htmlFor="number1">Number 1:</label>
                <input
                    type="number"
                    id="number1"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    required
                    min="1"
                    max="36"
                    className={styles.input}
                />

                <label htmlFor="number2">Number 2:</label>
                <input
                    type="number"
                    id="number2"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    required
                    min="1"
                    max="36"
                    className={styles.input}
                />

                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>

                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default InputComponent;
