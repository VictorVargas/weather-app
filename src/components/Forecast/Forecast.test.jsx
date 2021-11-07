import React from "react"
import Forecast from "./Forecast"
import { render } from "@testing-library/react"

const forecastItemList = [
  { weekDay: "Monday", hour: 10, state: "clear", temperature: 18 },
  { weekDay: "Tuesday", hour: 11, state: "clouds", temperature: 17 },
  { weekDay: "Wednesday", hour: 12, state: "drizzle", temperature: 16 },
  { weekDay: "Thursday", hour: 13, state: "snow", temperature: 15 },
  { weekDay: "Friday", hour: 14, state: "rain", temperature: 14 },
  { weekDay: "Saturday", hour: 15, state: "thunderstorm", temperature: 13 },
]

test("Forecast render", async () => {
  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  )
  const forecastItems = await findAllByTestId("forecast-item-container")
  expect(forecastItems).toHaveLength(forecastItemList.length)
})
