import React from "react"
import Weather from "./index"
import { validValues } from "../IconState"

export default {
  title: "Weather",
  component: Weather,
  argsTypes: {
    temperature: { control: "number" },
    state: { control: "select", options: validValues },
  },
}

const Template = (args) => <Weather {...args} />

export const WeatherCloud = Template.bind({})
WeatherCloud.args = {
  temperature: 10,
  state: "clouds",
}
export const WeatherSunny = Template.bind({})
WeatherSunny.args = {
  temperature: 10,
  state: "clear",
}
