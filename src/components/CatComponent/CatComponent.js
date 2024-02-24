import React, { useState, useEffect } from 'react';
import styles from './CatComponent.module.css';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
};


const CatComponent = ({ history, refreshKey }) => {
    const [numbers, setNumbers] = useState([]);
    console.log(refreshKey);
    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));

        if (storedHistory) {
            const lastEntry = storedHistory[0];
            const lastNumbers = lastEntry.numbers;
            setNumbers(lastNumbers);
        }

    }, [refreshKey]);

    return (
        <div className={styles.catOuter}>

                {Array.from({ length: 7 }, (_, index) => (
                    <div className={styles.catContainer} key={index}>
                        <img src={require('../../img/cat.png')} className={styles.catImage} alt={`Katze ${index + 1}`} />
                        {numbers.length > 0 && <p className={styles.catNumber}>{numbers[index]}</p>}
                    </div>
                ))}

        </div>
    );
};
export default CatComponent;
