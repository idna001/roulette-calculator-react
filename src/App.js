import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
                    <NavLink to="/cruncher" className={({ isActive }) => isActive ? 'active' : ''}>Cruncher</NavLink>
                    <NavLink to="/cats" className={({ isActive }) => isActive ? 'active' : ''}>Cats</NavLink>
                </nav>
            </div>
        </Router>
    );
};

export default App;