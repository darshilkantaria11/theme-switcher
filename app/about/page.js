"use client"
import { useContext } from "react"
import themeContext from "../context/themeContext"

export default function about() {

    const { theme } = useContext(themeContext);

    return (
        <>
        <div className="flex flex-col" style={{ backgroundColor: theme.primary}}>
            <p>This is a dynamically themed component.</p>
        </div>
        <div className="flex flex-col" style={{ backgroundColor: theme.secondary}}>
            <p>This is a dynamically themed component.</p>
        </div>
        <div className="flex flex-col" style={{ backgroundColor: theme.accent}}>
            <p>This is a dynamically themed component.</p>
        </div>
        <div className="flex flex-col" style={{ backgroundColor: theme.neutral}}>
            <p>This is a dynamically themed component.</p>
        </div>
        <div className="flex flex-col" style={{ backgroundColor: theme.base-100}}>
            <p>This is a dynamically themed component.</p>
        </div>

        </>
        
    );
}