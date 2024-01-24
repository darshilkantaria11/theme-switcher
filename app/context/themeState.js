"use client"
import ThemeContext from "./themeContext";
import { lightTheme, darkTheme, forestTheme, fireTheme } from '../components/Theme';
import { useState } from "react";

const themeState =(props) =>{

    
    const [theme, setTheme] = useState(fireTheme)

    return(
        <>
        
        <ThemeContext.Provider value={theme} >
            {props.children}
        </ThemeContext.Provider>
        </>
    )
}

export default themeState