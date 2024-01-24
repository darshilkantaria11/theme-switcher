"use client"
import ThemeContext from "./themeContext";

const themeState =(props) =>{

    const state = {
        primary: '#333333',
        secondary: '#1a1a1a',

    }

    return(
        <>
        <ThemeContext.Provider value={state} >
            {props.children}
        </ThemeContext.Provider>
        </>
    )
}

export default themeState