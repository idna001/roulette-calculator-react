import React, { useState } from 'react';
import styles from './CatComponent.module.css';
 const CatComponent = ({ history }) => {
        return (
        <div>
            <div>
                {history.map((entry, index) => (
                    <React.Fragment key={index}>

                    <div key={index}>
                        <img src={require('../../img/cat.png')}
                             className={styles.catImage}
                             alt={`Katze `}/>
                        <p>{entry.sum}</p>
                    </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default CatComponent;