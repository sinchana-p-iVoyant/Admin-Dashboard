import { ResponsiveBar } from "@nivo/bar";
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../../ThemeContext'
import { mockBarData as data } from "../../data/mockData";

export const BarChart = ({ isDashboard = false }) => {

    const darkTheme = useTheme()

    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }

  return (
      <ResponsiveBar
      data={data}
          theme={{
        "background": "#a69b9b",
        // added
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
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

