import moment from "moment"
import "moment/locale/es"

const getChartData = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5]
  const days = daysAhead.map((day) => moment().add(day, "days"))
  const dataAux = days
    .map((day) => {
      const tempObjArray = data.list.filter((item) => {
        const dayOfYear = moment.unix(item.dt).dayOfYear()
        return dayOfYear === day.dayOfYear()
      })
      const temps = tempObjArray.map((item) => {
        return Math.round(item.main.temp - 273.15)
      })
      // dayHour, min, max
      return {
        dayHour: day.format("ddd"),
        min: Math.min(...temps),
        max: Math.max(...temps),
        hasTemps: temps.length > 0 ? true : false,
      }
    })
    .filter((item) => item.hasTemps)

  return dataAux
}

export default getChartData
