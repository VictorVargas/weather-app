import React from "react"
import CityList from "./CityList"
import { action } from "@storybook/addon-actions"

export default {
  title: "CityList",
  component: CityList,
}

const cities = [
  { city: "New York", country: "USA", countryCode: "US" },
  { city: "London", country: "UK", countryCode: "GB" },
  { city: "Paris", country: "France", countryCode: "FR" },
  { city: "Berlin", country: "Germany", countryCode: "DE" },
  { city: "Rome", country: "Italy", countryCode: "IT" },
  { city: "Hermosillo", country: "Mexico", countryCode: "MX" },
]

export const CitylistExample = () => (
  <CityList cities={cities} onClickCity={action("Click in city")} />
)
