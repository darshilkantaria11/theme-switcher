"use client"

// themeState.js
// themeState.js
import React, { useState, useEffect, useCallback } from "react";
import ThemeContext from "./themeContext";
import { lightTheme, darkTheme, forestTheme, fireTheme } from '../components/Theme';

const ThemeState = (props) => {
  // Check if localStorage is available
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

  // Retrieve theme from local storage or use the default theme (fireTheme)
  const storedTheme = isLocalStorageAvailable ? localStorage.getItem('theme') : null;
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : fireTheme;

  const [theme, setTheme] = useState(initialTheme);

  const switchTheme = useCallback((selectedTheme) => {
    let newTheme;

    switch (selectedTheme) {
      case 'light':
        newTheme = lightTheme;
        break;
      case 'dark':
        newTheme = darkTheme;
        break;
      case 'forest':
        newTheme = forestTheme;
        break;
      case 'fire':
      default:
        newTheme = fireTheme;
    }

    setTheme(newTheme);

    // Save selected theme to local storage if available
    isLocalStorageAvailable && localStorage.setItem('theme', JSON.stringify(newTheme));
  }, [isLocalStorageAvailable]);

  // useEffect to update the theme in local storage when it changes
  useEffect(() => {
    // Update local storage if available
    isLocalStorageAvailable && localStorage.setItem('theme', JSON.stringify(theme));
  }, [isLocalStorageAvailable, theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
