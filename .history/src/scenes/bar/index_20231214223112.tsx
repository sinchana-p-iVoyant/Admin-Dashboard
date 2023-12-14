import React from 'react'
import { BarChart } from '../../components/barchart/BarChart'
import Header from '../../components/header/Header'
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../../ThemeContext'

export const Bar = () => {

    const darkTheme = useTheme()


  return (
    <div style={{ maxWidth: '90vw' }}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div style={{ height:"75vh" }}>
            <BarChart />
        </div>
      </div>
  )
}

