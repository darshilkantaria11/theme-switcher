"use client"


import React, { useState, useEffect, useCallback } from "react";
import ThemeContext from "./themeContext";
import { light, dark, forest, retro, valentine, aqua, black, lemonade, } from '../components/Theme';

const ThemeState = (props) => {


    const [theme, setTheme] = useState(light);



    useEffect(() => {

        const storedTheme = localStorage.getItem('theme');
        const initialTheme = storedTheme ? JSON.parse(storedTheme) : light;
        setTheme(initialTheme);

    }, []);


    const switchTheme = useCallback((selectedTheme) => {
        let newTheme;

        switch (selectedTheme) {
            case 'light':
                newTheme = light;
                break;
            case 'dark':
                newTheme = dark;
                break;
            case 'forest':
                newTheme = forest;
                break;
            case 'fire':
                newTheme = retro;
                break;
            case 'valentine':
                newTheme = valentine;
                break;
            case 'aqua':
                newTheme = aqua;
                break;
            case 'black':
                newTheme = black;
                break;
            case 'lemonade':
                newTheme = lemonade;
                break;
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
