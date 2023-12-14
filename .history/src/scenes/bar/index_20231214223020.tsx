import React from 'react'
import { BarChart } from '../../components/barchart/BarChart'
import Header from '../../components/header/Header'

export const Bar = () => {

  import { useTheme, lightThemeStyles, darkThemeStyles } from '../../../ThemeContext'

    const darkTheme = useTheme()
  
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }

  return (
    <div style={{ maxWidth: '90vw' }}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div style={{ height:"75vh" }}>
            <BarChart />
        </div>
      </div>
  )
}

