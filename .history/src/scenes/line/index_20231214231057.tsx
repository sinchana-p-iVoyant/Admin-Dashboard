import React from 'react'
import { LineChart } from '../../components/lineChart/LineChart'
import Header from '../../components/header/Header'

export const Bar = () => {
  return (
    <div>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div style={{ height:"75vh" }}>
            <LineChart />
        </div>
      </div>
  )
}
