import React, { useState } from 'react';
import styles from './CatComponent.module.css';

const calculateCrossSum = (number) => {
    return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};
 const CatComponent = ({ history }) => {
        return (
        <div>
            <div>
                {history.map((entry, index) => (
                    <React.Fragment key={index}>

                        <div className={styles.catContainer} key={index}>
                            <img src={require('../../img/cat.png')}
                                 className={styles.catImage}
                                 alt={`Katze `}/>
                            <p className={styles.catNumber}>{entry.sum}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
        );
 }

export default CatComponent;