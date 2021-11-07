import React from "react"
import Forecast from "./Forecast"

export default {
  title: "Forecast",
  component: Forecast,
}

const forecastItemList = [
  { weekDay: "Monday", hour: 10, state: "clear", temperature: 18 },
  { weekDay: "Tuesday", hour: 11, state: "clouds", temperature: 17 },
  { weekDay: "Thursday", hour: 13, state: "snow", temperature: 15 },
  { weekDay: "Friday", hour: 14, state: "drizzle", temperature: 14 },
  { weekDay: "Saturday", hour: 15, state: "thunderstorm", temperature: 13 },
]

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
)
