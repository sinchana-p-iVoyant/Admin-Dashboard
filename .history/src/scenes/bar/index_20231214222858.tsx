import React from 'react'
import { BarChart } from '../../components/barchart/BarChart'
import Header from '../../components/header/Header'

export const Bar = () => {
  return (
    <div style>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div style={{ height:"75vh" }}>
            <BarChart />
        </div>
      </div>
  )
}

