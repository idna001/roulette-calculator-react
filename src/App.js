import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cruncher from "./views/cruncher";
import Cats from "./views/cats";

import './App.css'; // Stellen Sie sicher, dass Sie die CSS-Datei importieren

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path="/" element={<Cruncher />} />
                    <Route path="/cruncher" element={<Cruncher />} />
                    <Route path="/cats" element={<Cats />} />
                </Routes>
                <nav className='bottom-nav'>
                    <Link to="/cruncher">Cruncher</Link>
                    <Link to="/cats">Cats</Link>
                </nav>
            </div>
        </Router>
    );
};

export default App;