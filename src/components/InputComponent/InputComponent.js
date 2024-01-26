import React, { useState } from 'react';
import styles from './InputComponent.module.css';

const InputComponent = ({ onSubmit }) => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(number1, number2);
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label>
            Number 1:
                <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
            </label>
            <label>
                Number 2:
                <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputComponent;
