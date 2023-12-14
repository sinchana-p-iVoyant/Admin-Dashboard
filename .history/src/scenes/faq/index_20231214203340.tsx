import React from 'react'
import Header from '../../components/header/Header'

export const FAQ: React.FC = () => {
    const darkTheme = useTheme()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }
    return (
        <div>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
        </div>
    )
}