import React, { useMemo } from "react"
import Grid from "@material-ui/core/Grid"
import { LinearProgress } from "@material-ui/core"
import AppFrame from "../components/AppFrame/AppFrame"
import CityInfo from "./../components/CityInfo"
import Weather from "./../components/Weather"
import WeatherDetails from "./../components/WeatherDetails"
import Forecast from "./../components/Forecast"
import ForecastChart from "./../components/ForecastChart"
import useCityPage from "./../hooks/useCityPage"
import useCityList from "../hooks/useCityList"
import { getCityCode } from "../utils/utils"
import { getContryNameByCountryCode } from "../utils/serviceCities"

const CityPage = ({ data, actions }) => {
  const { allWeather, allChartData, allForecastItemList } = data
  const {
    onSetAllWeather,
    onSetAllChartData,
    onSetAllForecastItemList,
  } = actions
  const { city, countryCode } = useCityPage(
    allChartData,
    allForecastItemList,
    onSetAllChartData,
    onSetAllForecastItemList
  )
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode])
  useCityList(cities, allWeather, onSetAllWeather)
  const cityCode = getCityCode(city, countryCode)
  const weather = allWeather[cityCode]
  const chartData = allChartData[cityCode]
  const forecastItemList = allForecastItemList[cityCode]
  const country = getContryNameByCountryCode(countryCode)
  const state = weather && weather.state
  const temperature = weather && weather.temperature
  const humidity = weather && weather.humidity
  const wind = weather && weather.wind

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="flex-end"
        >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Weather state={state} temperature={temperature} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>
        <Grid item>
          {!chartData && !forecastItemList && <LinearProgress />}
        </Grid>
        <Grid item>{chartData && <ForecastChart data={chartData} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage
