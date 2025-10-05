import React, { useState, useEffect } from 'react';
import styles from './CatComponent.module.css';

const CatComponent = ({ history, refreshKey }) => {
    const [numbers, setNumbers] = useState([]);
    const [isShaking, setIsShaking] = useState(false);

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
                    
                    {/* This block now handles light/dark mode images automatically */}
                    <picture>
                        {/* Use the white cat image if the user is in dark mode */}
                        <source srcSet={require('../../img/darkmode_cat.png')} media="(prefers-color-scheme: dark)" />
                        
                        {/* Use the default black cat image for light mode */}
                        <img 
                            src={require('../../img/cat2.png')}
                            className={styles.catImage}
                            alt={`Katze ${index + 1}`} 
                        />
                    </picture>
                    
                    {numbers.length > 0 && <p className={styles.catNumber}>
                        {numbers[index]}
                    </p>}
                </div>
            ))}
        </div>
    );
};

export default CatComponent;
