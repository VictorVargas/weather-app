import React from "react"
import { render, fireEvent } from "@testing-library/react"
import CityList from "./CityList"
import axios from "axios"
import { jest } from "@jest/globals"
import { WeatherContext } from "../../WeatherContext"

const cities = [
  { city: "New York", country: "USA", countryCode: "US" },
  { city: "London", country: "UK", countryCode: "GB" },
  { city: "Paris", country: "France", countryCode: "FR" },
  { city: "Berlin", country: "Germany", countryCode: "DE" },
  { city: "Rome", country: "Italy", countryCode: "IT" },
  { city: "Hermosillo", country: "Mexico", countryCode: "MX" },
]

jest.mock("axios")

test("CityList renders", async () => {
  // AAA Arranges Act Assert
  axios.get.mockResolvedValue({
    data: { main: { temp: 280.32 }, weather: [{ main: "Drizzle" }] },
  })
  const fnClickOnItem = jest.fn()
  const { findAllByRole } = render(
    <WeatherContext>
      <CityList cities={cities} onClickCity={fnClickOnItem} />
    </WeatherContext>
  )
  const cityListItems = await findAllByRole("button")
  expect(cityListItems).toHaveLength(cities.length)
})

test("CityList click on item", async () => {
  // Use function mocks to test click event
  axios.get.mockResolvedValue({
    data: { main: { temp: 280.32 }, weather: [{ main: "Drizzle" }] },
  })
  const fnClickOnItem = jest.fn()
  const { findAllByRole } = render(
    <WeatherContext>
      <CityList cities={cities} onClickCity={fnClickOnItem} />
    </WeatherContext>
  )
  const items = await findAllByRole("button")
  // Simulate click event with fireEvent
  fireEvent.click(items[0])
  // Call the function mock
  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
