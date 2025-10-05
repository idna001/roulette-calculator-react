import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Cruncher from "./views/cruncher";
import Cats from "./views/cats";
import { ThemeContext } from './ThemeContext';
import './App.css';

const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Router>
            <div className={`app1 ${theme}`}>
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>

                <Routes>
                    <Route path="/" element={<Navigate to="/cruncher" />} />
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
