import moment from "moment"
import "moment/locale/es"

const getForecastItemList = (data) => {
  const interval = [4, 8, 12, 16, 20, 24]
  const forecastItemListAux = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      return {
        hour: moment(item.dt_txt).hour(),
        weekDay: moment(item.dt_txt).format("dddd"),
        state: item.weather[0].main.toLowerCase(),
        temperature: Math.round(item.main.temp - 273.15),
      }
    })
  return forecastItemListAux
}

export default getForecastItemList
