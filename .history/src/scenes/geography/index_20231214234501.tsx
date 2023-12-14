import React from 'react'
import { GeographyChart } from '../../components/geographyChart/GeographyChart'
import Header from '../../components/header/Header'

export const Geography = () => {
  return (
    <div>
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
        <div style={{ height:"75vh", border: '1px solid grey' }}>
            <GeographyChart />
        </div>
      </div>
  )
}

