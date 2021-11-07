const appid = "4d144dc5b71a63a3cae0a272d75ab24f"
export const getWeatherUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

export const getForecastUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
