"use client"
import { useContext } from "react"
import themeContext from "../context/themeContext"

export default function about() {

    const a = useContext(themeContext)

    return (
        <>
            <div
                className="bg-primary text-accent flex flex-col"
                style={{ backgroundColor: a.primary, color: a.secondary }}
            >
                <p className="text-secondary">This is a dynamically themed component.</p>

            </div>
        </>
    )
}