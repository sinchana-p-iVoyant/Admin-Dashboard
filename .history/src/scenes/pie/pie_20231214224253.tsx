import React from 'react'
import { Pie } from '../../components/barchart/BarChart'
import Header from '../../components/header/Header'

export const Pie = () => {
  return (
    <div>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <div style={{ height:"75vh" }}>
            <BarChart />
        </div>
      </div>
  )
}

