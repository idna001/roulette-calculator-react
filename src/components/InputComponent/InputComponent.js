import React, { useState } from 'react';
import styles from './InputComponent.module.css';

// The component now accepts a 'theme' prop, defaulting to 'light'
const InputComponent = ({ onSubmit, theme = 'light' }) => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [error, setError] = useState('');

    const validateInput = (value) => {
        const number = parseFloat(value);
        return !isNaN(number) && number >= 1 && number <= 36;
    };
    
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

    // This line determines which theme class to use based on the prop
    const themeClass = theme === 'dark' ? styles.darkMode : styles.lightMode;

    return (
        <div className={styles.inputContainer}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label htmlFor="number1" className={styles.label}>Number 1 :</label>
                <input
                    type="number"
                    id="number1"
                    placeholder='Enter a number between 1 and 36'
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    required
                    min="1"
                    max="36"
                    // CORRECTED: We combine the base class and the theme class
                    className={`${styles.input} ${themeClass}`}
                />

                <label htmlFor="number2" className={styles.label}>Number 2 :</label>
                <input
                    type="number"
                    id="number2"
                    placeholder='Enter a number between 1 and 36'
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    required
                    min="1"
                    max="36"
                    // CORRECTED: We do the same for the second input
                    className={`${styles.input} ${themeClass}`}
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