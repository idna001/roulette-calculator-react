import React, { useState } from 'react';
import styles from './CatComponent.module.css';

function CatCounter() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [showCounts, setShowCounts] = useState(false);
    const [catCounts, setCatCounts] = useState(Array(7).fill(0));

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowCounts(true);
        // Dummy function to generate random counts for each cat
        const newCounts = catCounts.map(() => Math.floor(Math.random() * 10) + 1);
        setCatCounts(newCounts);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChangeName} />
                </label>
                <label>
                    Alter:
                    <input type="number" value={age} onChange={handleChangeAge} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                {showCounts && catCounts.map((count, index) => (
                    <div key={index}>
                        <img src={require('../../img/cat.png')}
                             className={styles.catImage}
                             alt={`Katze ${index + 1}`}/>
                        <p>{count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatCounter;
