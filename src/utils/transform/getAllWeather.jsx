import { validValues } from "../../components/IconState"
import { getCityCode } from "../utils"

const getAllWeather = (res, city, countryCode) => {
  const { main, weather, wind } = res.data
  const temperature = Math.round(main.temp - 273.15)
  const humidity = main.humidity
  const windAux = wind.speed
  const state = validValues.includes(weather[0].main.toLowerCase())
    ? weather[0].main.toLowerCase()
    : null
  const propName = getCityCode(city, countryCode)
  const propValue = { temperature, state: state, humidity, wind: windAux }
  return {
    [propName]: propValue,
  }
}

export default getAllWeather
