import React from 'react'
import { GeographyChart } from '../../components/geographyChart/GeographyChart'
import Header from '../../components/header/Header'

export const Geography = () => {
  return (
    <div>
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
        <div style={{ height:"75vh" }}>
            <GeographyChart />
        </div>
      </div>
  )
}

