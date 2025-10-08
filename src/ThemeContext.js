// src/ThemeContext.js
import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for validation

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Initialize state directly from localStorage to prevent flash of wrong theme
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    });

    // Effect to update the body class whenever the theme changes
    useEffect(() => {
        document.body.className = ''; // Clear previous classes
        document.body.classList.add(theme);
    }, [theme]);

    // Wrap toggleTheme in useCallback so it doesn't get recreated on every render
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }, []);

    // Memoize the context value to prevent unnecessary re-renders of consumers
    const value = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Add prop validation to fix the "'children' is missing" warning
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};