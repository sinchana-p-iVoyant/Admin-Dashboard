import React from 'react'
import { GeographyChart } from '../../components/GeographyChart/GeographyChart'
import Header from '../../components/header/Header'

export const Pie = () => {
  return (
    <div>
      <Header title="Geography Chart" subtitle="Simple Pie Chart" />
        <div style={{ height:"75vh" }}>
            <GeographyChart />
        </div>
      </div>
  )
}

