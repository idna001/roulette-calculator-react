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
        } else {
            setError('Please enter numbers between 1 and 36 for both inputs.');
        }
    };

    const validateInput = (value) => {
        const number = parseFloat(value);
        return !isNaN(number) && number >= 1 && number <= 36;
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label>
                Number 1:
                <input
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    required
                    min="1"
                    max="36"
                />
            </label>
            <label>
                Number 2:
                <input
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    required
                    min="1"
                    max="36"
                />
            </label>
            <button type="submit">Submit</button>
            {error && <p className={styles.error}>{error}</p>}
        </form>
    );
};

export default InputComponent;
