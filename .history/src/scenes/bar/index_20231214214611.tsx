import React from 'react'
import { BarChart } from '../../components/barchart/BarChart'
import Header from '../../components/header/Header'

export const Bar = () => {
  return (
    <div>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div style={{  }}>
            <BarChart />
        </div>
      </div>
  )
}

