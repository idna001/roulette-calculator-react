import React, { useState, useEffect } from 'react';
import styles from './CatComponent.module.css';

const CatComponent = ({ history, refreshKey }) => {
    const [numbers, setNumbers] = useState([]);
    const [isShaking, setIsShaking] = useState(false);

    // src/components/CatComponent/CatComponent.js
    useEffect(() => {
        setIsShaking(true);
        const storedHistory = JSON.parse(localStorage.getItem('catsHistory'));
        if (storedHistory && storedHistory.length > 0) {
            const lastEntry = storedHistory[0];
            const lastNumbers = lastEntry.numbers;
            setNumbers(lastNumbers);
        } else {
            setNumbers([]);
        }
        const timeout = setTimeout(() => {
            setIsShaking(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [refreshKey]);


    return (
        <div className={styles.catOuter}>
            {Array.from({ length: 7 }, (_, index) => (
                <div className={`${styles.catContainer} ${isShaking ? styles.shake : ''}`} key={index}>
                    <img src={require('../../img/cat.png')}
                         className={styles.catImage}
                         alt={`Katze ${index + 1}`} />
                    {numbers.length > 0 && <p className={styles.catNumber}>
                        {numbers[index]}
                    </p>}
                </div>
            ))}
        </div>
    );
};

export default CatComponent;
