import React from 'react'
import './Header.css'

import { useTheme, lightThemeStyles, darkThemeStyles } from '../../ThemeContext'

interface HeaderProps {
    title: string,
    subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#04364A",
    }

    return (
    <div className='header-container' style={themeStyles}>
          <h1>{ title }</h1> 
          <p style={{ color: darkTheme ? "#3da58a" : " #187058" }}>{ subtitle }</p>
    </div>
  )
}

export default Header