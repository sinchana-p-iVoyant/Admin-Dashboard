import React from 'react'
import { LineChart } from '../../components/linechart/LineChart'
import Header from '../../components/header/Header'

export const Line = () => {
  return (
    <div>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
        <div style={{ height:"75vh" }}>
            <LineChart />
        </div>
      </div>
  )
}
