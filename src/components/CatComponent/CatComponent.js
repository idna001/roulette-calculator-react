import React, { useState, useEffect } from 'react';
import styles from './CatComponent.module.css';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
};

const CatComponent = ({ history }) => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        if (history.length > 0) {
            const newNumbers = Array.from({ length: 7 }, generateRandomNumber);
            setNumbers(newNumbers);
        }
    }, [history]);

    return (
        <div>
            <div>
                {Array.from({ length: 7 }, (_, index) => (
                    <div className={styles.catContainer} key={index}>
                        <img src={require('../../img/cat.png')} className={styles.catImage} alt={`Katze ${index + 1}`} />
                        {numbers.length > 0 && <p className={styles.catNumber}>{numbers[index]}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatComponent;
