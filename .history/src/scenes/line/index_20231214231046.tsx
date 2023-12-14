import React from 'react'
import { Line } from '../../components/Line/Line'
import Header from '../../components/header/Header'

export const Bar = () => {
  return (
    <div>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div style={{ height:"75vh" }}>
            <Line />
        </div>
      </div>
  )
}
