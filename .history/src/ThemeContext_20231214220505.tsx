import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const lightThemeStyles = {
    backgroundColor: "#dde6ed",
    color: '#27374D',
   
}
export const darkThemeStyles = {
    backgroundColor: "#27374D",
     color: "#dde6ed"
}

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext (ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}