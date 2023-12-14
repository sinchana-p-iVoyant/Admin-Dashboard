import React from 'react'
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../data/mockGeoFeatures";
import { mockGeographyData as data } from "../../data/mockData";
import { useTheme } from '../../ThemeContext'

export const GeographyChart = ({ isDashboard = false }) => {
  const darkTheme = useTheme()

  return (
    <ResponsiveChoropleth
      data={data}
            theme={{
        "background": darkTheme ? "#141b2d" : "#dde6ed",

        axis: {
          domain: {
            line: {
              stroke: 'black',
            },
          },
          legend: {
            text: {
              fill: 'black',
            },
          },
          ticks: {
            line: {
              stroke: 'black',
              strokeWidth: 1,
            },
            text: {
              fill: 'black',
            },
          },
        },
        legends: {
          text: {
            fill: 'black',
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: darkTheme ? 'white' : '',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  )
}
