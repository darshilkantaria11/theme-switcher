"use client"


import React, { useState, useEffect, useCallback } from "react";
import ThemeContext from "./themeContext";
import { lightTheme, darkTheme, forestTheme, fireTheme } from '../components/Theme';

const ThemeState = (props) => {


  const [theme, setTheme] = useState(lightTheme);


    
    useEffect(() => {
        
        const storedTheme = localStorage.getItem('theme');
          const initialTheme = storedTheme ? JSON.parse(storedTheme) : lightTheme;
            setTheme(initialTheme); 
        
      }, []);
    

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
    console.log(newTheme)

  
  localStorage.setItem('theme', JSON.stringify(newTheme));
  }, []);



  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
